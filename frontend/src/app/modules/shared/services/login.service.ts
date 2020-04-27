import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,) { }

  loggedIn(body) {
    const url = "http://localhost:3000/api/auth"
    const httpHeaders = {
      headers: new HttpHeaders({
        "Auth": "my Auth",
      })
    }
    // body.rememberMe = false
    return this.http.post(url, body, httpHeaders).pipe(
      map(user => {
        // this.userdata = user
        console.log("==="+ user)
        sessionStorage.setItem('x-auth-token', user['x-auth-token'])
        
        return user

      })
    )
  }
}
