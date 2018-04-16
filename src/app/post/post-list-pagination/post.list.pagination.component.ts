import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PostServiceObservable } from '../post.service.observable'
import { ActivatedRoute, Params } from '@angular/router';

@Component
({
    templateUrl: './post.list.pagination.component.html'
})
export class PostListPaginationComponent implements OnInit
{
    posts: Observable<any>;                // Use it with pipe "| async" since it will automatically subscribe/unsubscribe Observable
    public postList: Array<any> = [];      // Use it, if you don't want to use pipe "| async" and subscribe Observable explicitly
  
    constructor(private postServiceObservable : PostServiceObservable, private route: ActivatedRoute) { }
  
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
          //console.log(data);
          //console.log("------------------------------------");
          //console.log(data[0]);
          //console.log("------------------------------------");
          //console.log(data[0].id);
          this.postList = data;
          //console.log("------------------------------------");
          //console.log(this.postList);
      });
    }
}