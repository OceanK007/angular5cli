import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user.list.component';

const userRoutes: Routes = 
[
    { 
        path: 'user', 
        component: UserComponent,
        children: 
        [
            {
                path: "list",
                component: UserListComponent
            }
        ]
    },
]

@NgModule
({
    imports: [ RouterModule.forChild(userRoutes) ],
    exports: [ RouterModule ]  // you will get error if you don't export it:: Template parse errors: 'router-outlet' is not a known element:
})
export class UserRoutingModule { }