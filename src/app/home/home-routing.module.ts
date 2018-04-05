import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule
({
  imports: 
  [
    RouterModule.forChild
    ([
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },

      // otherwise redirect to home
      //{ path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }