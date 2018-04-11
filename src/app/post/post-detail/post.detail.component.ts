import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PostServiceObservable } from '../post.service.observable'
import { Post } from '../post';

@Component
({
    templateUrl: './post.detail.component.html'
})
export class PostDetailComponent
{
    posts: Observable<any>;
    parameters: Params;
    public postDetail: Post;
 
    constructor(private postServiceObservable : PostServiceObservable, private route: ActivatedRoute) 
    { 
        //debugger;
        this.route.params.subscribe(params => 
        {
            console.log(params['postId']);        
            this.parameters = params;
            console.log(this.parameters['postId']);

            //debugger;
            this.getPostById(this.parameters['postId']);
        });
    }

    getPostById(id: number)
    {
        //debugger;
        this.posts = this.postServiceObservable.getPostById(id);
        
        this.posts.subscribe(data => 
        {
            console.log('1');
            console.log(data);
            this.postDetail = data;
            console.log(this.postDetail);
            console.log('2');
        });
    }
}