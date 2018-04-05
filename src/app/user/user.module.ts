import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user.list.component';
import { UserServiceObservable } from './user.service.observable'

@NgModule
({
  imports: [UserRoutingModule,CommonModule, HttpClientModule],
  declarations: [UserComponent, UserListComponent],
  exports: [UserComponent, UserListComponent],
  providers: [ UserServiceObservable ],
})
export class UserModule { }