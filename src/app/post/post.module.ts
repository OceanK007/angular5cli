import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';

import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post.list.component';
import { PostDetailComponent } from './post-detail/post.detail.component';
import { PostServiceObservable } from './post.service.observable'
import { PostListPaginationComponent } from './post-list-pagination/post.list.pagination.component';

@NgModule
({
  imports: [PostRoutingModule,CommonModule, HttpClientModule],
  declarations: [PostComponent, PostListComponent, PostDetailComponent, PostListPaginationComponent],
  exports: [PostComponent, PostListComponent, PostDetailComponent, PostListPaginationComponent],
  providers: [ PostServiceObservable ],
})
export class PostModule { }