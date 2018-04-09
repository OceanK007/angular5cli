import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PostServiceObservable } from '../post.service.observable'

@Component
({
    templateUrl: './post.detail.component.html'
})
export class PostDetailComponent implements OnInit
{
    posts: Observable<any>;
    parameters: Params;
    public postList: Array<any> = [];
 
    constructor(private postServiceObservable : PostServiceObservable, private route: ActivatedRoute) 
    { 
        
    }

    ngOnInit()
    {
        //debugger;
        this.route.params.subscribe(params => 
        {
            console.log(params['postId']);        
            this.parameters = params;
            console.log(this.parameters['postId']);
        });
        
        this.getPostById(this.parameters['postId']);
    }
 
    getPostById(id: number)
    {
      this.posts = this.postServiceObservable.getPostById(id);
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