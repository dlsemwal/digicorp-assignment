import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from '../loder';

@Injectable()
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();

  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show(type: string) {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }

  hide() {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }
}