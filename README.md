# Angular5cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#### To apply bootstrap.css style ####
Add in "styles.css"
    @import "~bootstrap/dist/css/bootstrap.css"

#### To start the project #####
npm install             // To update the packages
npm start               // To start project
ng build                // To build project
ng serve                // To start project (default env: dev)
ng build --prod         // To build project in production mode
ng serve --prod || ng serve --environment prod ||  ng s -e prod     // To start project in production mode
ng serve --environment qa      // To start custom environment (ng serve --qa command doesn't work with custom environments)

#### Angular Data Access Modifiers ####
* public
* private
* const     

    Examples:
    public userDetails: User;
    public firstName: string;
    private lastName: string;
    const userRoutes: Routes = [];
    private finished: boolean;

#### Angular pre-defined data types ####
* string
* number
* boolean

#### Define array ####
myArray = ['Hi', 'Hello', 'Bye', 'Ta Ta'];
private fruits: Array<string> = [];

#### Define Object ####
myObject = 
{
    name: 'Ocean',
    gender: 'Male',
    location: 'India'
};

#### Operators ####
* ? operator
    registrationForm.controls.firstName.errors?.required        // ? : means if errors is not null only then required field is referenced

* # operator
    Used to assign name to angular template. Angular templates are hidden by default.
    Example: 
        <ng-template #templateName>
            <div>Loading...</div>
        </ng-template> 
    
#### Expression ####
* {{variableName}}        

    # The expression context is typically the component instance.
    # The "title" refers to property of the Component

        {{title}}

    # Can be used in looping

        myArray = ['Hi', 'Hello', 'Bye', 'Ta Ta'];
        <li *ngFor="let arr of myArray">{{arr}}</li>

    # Can be used to get input template value. Here the entered value will be written out when you blur the input (the event listener for change is just for having the change detection run)

        <input type="text" (change)="true" #variable>
        {{variable.value}}

#### Attributes ####
* [hidden]
    Example: 
    <span [hidden]="isUnchanged">changed</span>     //  "isUnchanged" refers to property of the Component

* [ngClass]
    Example:
    <a [ngClass]="'active'">Home</a>        // This will make the button active

* 

#### Event ####
* (event)
    
    # Event binding syntax consists of a target event name within parentheses on the left of an equal sign, and a quoted template statement on the right.
    # following event binding listens for the button's click events

        <button (click)="onSave()">Save</button>

#### Data Bindings ####
* One Way (From data source to view target)

    # {{expression}}
    # [target]="expression"
    # bind-target="expression"

* One Way (From view target to data source) 

    # (target)="statement"
    # on-target="statement"

* Two Way

    # [(target)]="expression"
    # bindon-target="expression"

#### Ternary Operator ####
* For ternary operator use:

    [ngClass]="condition1==condition2 ? 'class-1' : 'class-2'"

* For multiple condition use:

    [ngClass]="{'class-1': condition1==condition2, 'class-2': condition3==condition4}"
    or
    [ngClass]="{'class-1': condition1==condition2}"

#### if-else, if-then-else, if-then ####
myArray = ['Hi', 'Hello', 'Bye', 'Ta Ta'];

* if
<div *ngIf="myArray">Displays when "if" matches</div>

* if-else
<div *ngIf="myArray;else other_content">if matched</div>
<ng-template #other_content>else matched (by-default templates don't display)</ng-template>

* if-then-else
<div *ngIf="myArray;then content else other_content">This line will be ignored</div>
<ng-template #content>if matched</ng-template>
<ng-template #other_content>else matched</ng-template>

* if-then
<div *ngIf="myArray;then content">This line will be ignored</div>
<ng-template #content>if matched</ng-template>

#### for loop ####
myArray = ['Hi', 'Hello', 'Bye', 'Ta Ta'];
<ul>
    <li *ngFor="let arr of myArray">{{arr}}</li>
</ul>

#### constructor vs ngOnInit ####
* The Constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialization of fields in the class and its subclasses.

* ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.
* We have to import OnInit in order to use like this (actually implementing OnInit is not mandatory but considered good practice)

* Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work".
* So you should use constructor() to setup Dependency Injection and not much else. ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.

import {Component, OnInit} from '@angular/core';
export class App implements OnInit
{
  constructor()
  {
     //called first time before the ngOnInit()
  }

  ngOnInit()
  {
     //called after the constructor and called  after the first ngOnChanges() 
  }
}

#### URL's ####
https://coursetro.com/courses/12/Learn-Angular-4-from-Scratch
https://github.com/gothinkster/angular-realworld-example-app

* Online rest service provider:
https://jsonplaceholder.typicode.com/

* For Routing:
https://www.concretepage.com/angular-2/angular-2-4-child-routes-and-relative-navigation-example

* For Observable:
https://github.com/jeroenouw/AngularREST
https://angular.io/guide/http
https://codecraft.tv/courses/angular/http/http-with-observables/
https://github.com/jeroenouw/AngularREST/blob/master/src/app/rest-observable/rest-observable.service.ts
https://www.concretepage.com/angular-2/angular-observable-example
https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b

* For setting different environment:
http://tattoocoder.com/angular-cli-using-the-environment-option/

* To upload to free server and env setup
https://medium.com/codingthesmartway-com-blog/building-an-angular-5-project-with-bootstrap-4-and-firebase-4504ff7717c1
