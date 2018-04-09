import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { environment } from '../environments/environment';

@NgModule
({
  imports: 
  [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    RegisterModule,
    UserModule,
    PostModule
  ],
  declarations: 
  [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { } 