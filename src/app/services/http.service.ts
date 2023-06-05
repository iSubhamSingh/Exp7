import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(public http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  createUser(userData: any) {
    return this.http.post('https://reqres.in/api/users', userData);
  }
}

