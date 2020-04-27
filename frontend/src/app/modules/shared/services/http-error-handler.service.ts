
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
// import { ErrorDto } from '../models/error-dto';
// import { FieldErrorDto } from '../models/field-error-dto';
// import { ErrorResponseDto } from '../models/error-response-dto';

// import { MessageService } from 'primeng/components/common/messageservice';

// import { CommonMessageTransferService } from './common-message-transfer.service';
import { LoaderService } from './../components/loader/loader.service';


export type HandleError = <T> (identifier?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;
@Injectable()
export class HttpErrorHandler {
  constructor(private router: Router, private messageService: MessageService, private loaderService: LoaderService,
    private commonMsgTrasferService: CommonMessageTransferService) { }
  createHandleError = () => <T>
    (identifier = 'unknown', result = {} as T) => this.handleError(identifier, result)

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param identifier - name of the identifier that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(identifier = 'unknown', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      this.messageService.clear();
      this.loaderService.hide();
      if (error.status === 0) {
        this.messageService.add({
          severity: 'error',
          summary: 'Server Unreachable.',
          detail: 'Sorry, seems like server is unreachable.'
        });
        return Observable.throw(result);
      }

      if (error.status === 500) {
        this.parseFieldErrors(error, identifier, 500);
        return Observable.throw(result);
      }

      if (error.status === 401) {
        this.messageService.add({
          severity: 'error',
          summary: 'Sign in required!',
          detail: 'Please login again to access the application.'
        });
        this.router.navigate(['/signin']);
        return Observable.throw(result);
      }

      if (error.error.errors !== undefined && error.error.errors !== null) {
        if (error.status === 400) {
          this.parseFieldErrors(error, identifier, 400);
          return Observable.throw(result);
        }

      }

      return Observable.throw(result);
    };
  }

  manageGeneralMsg(generalDto: ErrorDto, code: number) {
    let errorHeader = 'Login Error';
    if (code === 500) {
      errorHeader = 'Server Error';
    }
    this.messageService.add({
      severity: 'error',
      summary: errorHeader,
      detail: generalDto.message
    });
    this.commonMsgTrasferService.throwGeneralError(generalDto);
  }

  parseFieldErrors(error: HttpErrorResponse, identifier: string, code: number) {
    const fieldResponse: FieldErrorDto[] = [];
    const keys = Object.keys(error.error.errors);
    let isGeneralError = false;
    keys.forEach(key => {
      console.log('Key found :', key);
      if (isGeneralError) {
        return;
      }
      const filedErrors: ErrorDto[] = error.error.errors[key];
      if (key === 'general') {
        isGeneralError = true;
        filedErrors[0].identifier = identifier;
        this.manageGeneralMsg(filedErrors[0], code);
        return;
      }
      const dto: FieldErrorDto = new FieldErrorDto();
      dto.fieldName = key;
      dto.fielsErrors = filedErrors;
      fieldResponse.push(dto);
    });
    if (isGeneralError) {
      return;
    }
    const errorResponse: ErrorResponseDto = new ErrorResponseDto();
    errorResponse.fielsErrors = fieldResponse;
    errorResponse.identifier = identifier;
    this.commonMsgTrasferService.throwFieldsError(errorResponse);
  }
}

