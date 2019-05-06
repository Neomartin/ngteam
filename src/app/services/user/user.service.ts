import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GLOBAL } from '../global';


@Injectable()
export class UserService {
  public user: User;
  public url = GLOBAL.url;
  public headers = new HttpHeaders().set('Content-Type', 'application/json');
  public token: String;
  constructor(
    private http: HttpClient
  ) { }

  setCookies(token: String) {
    localStorage.setItem('token', JSON.stringify(this.token = token));
  }
  registrar(user: User) {
    const url = this.url + 'register';
    console.log('URL ', url);
    return this.http.post( url, user, { headers: this.headers } );
  }

  login(user: User) {
    const url = this.url + 'login';
    return this.http.post(url, user, { headers: this.headers });
  }
}
