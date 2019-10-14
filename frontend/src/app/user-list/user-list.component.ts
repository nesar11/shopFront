
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private _UserService: UserService) { }

  ngOnInit() {
    this.getUsers();

  }

  getUsers() {
    this._UserService.getUsers()
      .subscribe(
        res => {
          this.users = res; 
          console.log(res);// assign the res to the local vaariable 
        },
        err => console.log(err)
      )
  }
}