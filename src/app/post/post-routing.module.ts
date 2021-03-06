import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post.list.component';
import { PostDetailComponent } from './post-detail/post.detail.component';
import { PostListPaginationComponent } from './post-list-pagination/post.list.pagination.component';

const postRoutes: Routes = 
[
    { 
        path: 'post', 
        component: PostComponent,
        children: 
        [
            {
                path: "list",
                component: PostListComponent,
                children:
                [
                    {
                        path: "view/:postId",
                        component: PostDetailComponent
                    }
                ]
            }, 
            {
                path: "list-pagination",
                component: PostListPaginationComponent,
                children:
                [
                    {
                        path: "view/:postId",
                        component: PostDetailComponent
                    }
                ]
            }
        ]
    },
]

@NgModule
({
    imports: [ RouterModule.forChild(postRoutes) ],
    exports: [ RouterModule ]  // you will get error if you don't export it:: Template parse errors: 'router-outlet' is not a known element:
})
export class PostRoutingModule { }