import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PostServiceObservable } from '../post.service.observable'

@Component
({
    templateUrl: './post.list.component.html'
})
export class PostListComponent implements OnInit
{
    posts: Observable<any>;
    public postList: Array<any> = [];
  
    constructor(private postServiceObservable : PostServiceObservable) { }
  
    ngOnInit() 
    {
      this.getUsers();
    }
  
    getUsers()
    {
      this.posts = this.postServiceObservable.getAllPosts();
      //debugger;
      this.posts.subscribe(data => 
      {
          console.log(data);
          console.log("------------------------------------");
          console.log(data[0]);
          console.log("------------------------------------");
          console.log(data[0].id);
          this.postList = data;
          console.log("------------------------------------");
          console.log(this.postList);
      });
    }
}