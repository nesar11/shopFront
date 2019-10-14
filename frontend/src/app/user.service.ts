import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _UserUrl = "http://localhost:3001/api";

  constructor(private http: HttpClient,
    private _router: Router) { }

  getUsers(){
    return this.http.get<any>(this._UserUrl +'/userList')
  }

}
