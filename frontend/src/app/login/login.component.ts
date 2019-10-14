import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http'
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }


  loginUser () {
      this._auth.loginUser(this.loginUserData)
      .subscribe(
        res =>{ console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])}
      ,
        err => console.log(err)
      )
  }


}