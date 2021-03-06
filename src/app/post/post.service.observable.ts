import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostServiceObservable
{
    headers: HttpHeaders;
    options: any;
    baseUrl = environment.URL_LINK.API_BASE;
        
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

    getAllPosts() : Observable<any>
    {
        //return this.http.get(this.baseUrl + '/posts');
        return this.http.get(this.baseUrl + '/posts', this.options).catch(this.handleError);
   
        /*this.http.get(this.baseUrl + '/posts').subscribe(data => 
        {
           console.log(data);
        });*/
    }

    getPostById(id: number) : Observable<any>
    {
        //debugger;
        return this.http.get(this.baseUrl + '/posts/'+id, this.options).catch(this.handleError);
    }

    getPostsByPagination(page: number, limit: number) : Observable<any>
    {
        return this.http.get(this.baseUrl + '/posts?_page='+page+'&_limit='+limit, this.options).catch(this.handleError);
    }
}