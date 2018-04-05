import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserServiceObservable
{
    headers: HttpHeaders;
    options: any;
    baseUrl = 'http://jsonplaceholder.typicode.com';
        
    constructor (private http: HttpClient) 
    {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = ({headers: this.headers});
    }   

    private handleError (error: any) 
    {
        const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getAllUsers() : Observable<any>
    {
        //return this.http.get(this.baseUrl + '/users');
        return this.http.get(this.baseUrl + '/users', this.options).catch(this.handleError);
   
        /*this.http.get(this.baseUrl + '/users').subscribe(data => 
        {
           console.log(data);
        });*/
    }
}    