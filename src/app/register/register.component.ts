import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './register.user';

@Component
({
  /*selector: 'app-root',*/
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [User]
})
export class RegisterComponent 
{
  public registrationForm: FormGroup;   // This name must be same as u defined in <form [formGroup]="registrationForm">
  public userDetails: User;
  public userDetails2: User;
  
  constructor(private formBuilder: FormBuilder) 
  {
    this.createForm();
  }

  createForm() 
  {
    this.registrationForm = this.formBuilder.group
    ({
      firstName: ['', [Validators.required]],
      middleName: '',
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      address: this.formBuilder.group   // <-- the child FormGroup
      ({
        street: '',
        zip: ''
      }),
    });
    
    // To set default value.
    // this.registrationForm.controls['firstName'].setValue('John', { onlySelf: true });
    // onlySelf usage: Angular2 by default will check for the form control/form group validity cascadingly up to the top level whenever there's an update to any form element value, unless you say no. onlySelf is the tool to help you do that.

    //console.log("1");
    console.log(this.registrationForm);
    //console.log("2");
  }

  registrationFormSubmit(registerForm: NgForm) 
  {
    alert("Hi");
    console.log(registerForm);
    this.userDetails = new User();    // Will be sent for rest service consumption
    this.userDetails.firstName = registerForm.value.firstName;
    this.userDetails.middleName = registerForm.value.middleName;   
    this.userDetails.lastName = registerForm.value.lastName;     
    this.userDetails.email = registerForm.value.email;
    this.userDetails.password = registerForm.value.password;   
    this.userDetails.confirmPassword = registerForm.value.confirmPassword;   
    this.userDetails.street = registerForm.value.address.street;   
    this.userDetails.zip = registerForm.value.address.zip;   
    console.log(this.userDetails);


    this.userDetails2 = new User();
    this.userDetails2.firstName = "Ocean";
    this.userDetails2.middleName = "";   
    this.userDetails2.lastName = "Life";     
    this.userDetails2.email = "OceanK007@gmail.com";
    this.userDetails2.password = "hi";   
    this.userDetails2.confirmPassword = "hi";   
    this.userDetails2.street = "Heaven/Hell";   
    this.userDetails2.zip = 23324907204;   

    this.registrationForm = this.formBuilder.group
    ({
      firstName: this.userDetails2.firstName,
      middleName: this.userDetails2.middleName,
      lastName: this.userDetails2.lastName,
      email: this.userDetails2.email,
      password: this.userDetails2.password,
      confirmPassword: this.userDetails2.confirmPassword,
      address: this.formBuilder.group   // <-- the child FormGroup
      ({
        street: this.userDetails2.street,
        zip: this.userDetails2.zip
      }),
    });
  }
}