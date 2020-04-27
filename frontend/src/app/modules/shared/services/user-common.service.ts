import { Injectable } from '@angular/core';

// import { RestApiService } from '../services/rest-api.service';

import{HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserCommonService {

  constructor(private http: HttpClient) { }
  // signOut(): Observable<any> {
  //   return this.restApiService.delete('/secure/signout', 'page-center');
  // }

  // signIn(d, data): Observable<any> {
  //   return this.restApiService.post(d, '/login', data, 'page-center');
  // }

  // // passwordChange(data): Observable<any> {
  // //   return this.restApiService.put('/secure/users/profile/password', data, 'page-center');
  // // }

  // setPassword(data): Observable<any> {
  //   return this.restApiService.post('password', '/users/set-password', data, 'page-center');
  // }

  // getUserProfile(): Observable<any> {
  //   return this.restApiService.get('profile', '/secure/users/profile', 'page-center');
  // }

  // forgotPassword(data): Observable<any> {
  //   return this.restApiService.post('password', '/users/forgot-password', data, 'page-center');
  // }
  signupApi(loginBody) {
    const url = "http://localhost:3000/api/me"
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
      })
    }

    console.log("body===" + loginBody)
    return this.http.post(url, loginBody, httpHeaders)
  }
}

