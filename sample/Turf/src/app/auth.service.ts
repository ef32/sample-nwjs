import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { NEVER } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    return this.http.post('http://localhost:8080/api/auth.php', {
      username: username,
      password: password
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .pipe(catchError((err) => {console.log('this is the error' + err.error); return NEVER; }))
    .subscribe(data => {
      console.log(data,  'results from server');
    });
  }
}
