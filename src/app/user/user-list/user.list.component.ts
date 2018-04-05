import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserServiceObservable } from '../user.service.observable'

@Component
({
  templateUrl: './user.list.component.html'
})
export class UserListComponent implements OnInit 
{
  users: Observable<any>;
  public userList: Array<any> = [];

  constructor(private userServiceObservable : UserServiceObservable) { }

  ngOnInit() 
  {
    this.getUsers();
  }

  getUsers()
  {
    this.users = this.userServiceObservable.getAllUsers();
    //debugger;
    this.users.subscribe(data => 
    {
        console.log(data);
        console.log("------------------------------------");
        console.log(data[0]);
        console.log("------------------------------------");
        console.log(data[0].id);
        this.userList = data;
        console.log("------------------------------------");
        console.log(this.userList);
    });
  }
}