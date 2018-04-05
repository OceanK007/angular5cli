import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post.list.component';

const postRoutes: Routes = 
[
    { 
        path: 'post', 
        component: PostComponent,
        children: 
        [
            {
                path: "list",
                component: PostListComponent
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