import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';

import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post.list.component';
import { PostServiceObservable } from './post.service.observable'

@NgModule
({
  imports: [PostRoutingModule,CommonModule, HttpClientModule],
  declarations: [PostComponent, PostListComponent],
  exports: [PostComponent, PostListComponent],
  providers: [ PostServiceObservable ],
})
export class PostModule { }