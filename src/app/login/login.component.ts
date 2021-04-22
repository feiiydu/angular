import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];

  constructor() {

  }
  setData(user: User): void {

  }

  ngOnInit(): void {
    this.users = [
      new User(1, "user 01", "last 01", "1@mail.com",1),
      new User(2, "user 02", "last 02", "2@mail.com",2),
      new User(3, "user 03", "last 03", "3@mail.com",7),
    ]
  }

}
