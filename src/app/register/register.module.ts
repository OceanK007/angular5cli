import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';

@NgModule
({
  imports: [RegisterRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule { }