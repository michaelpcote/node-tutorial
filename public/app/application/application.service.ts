import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Application } from './application';

@Injectable()
export class ApplicationService {
    private classUrl = 'http://localhost:3000/api/classes';

    constructor(private http: Http) { }

    submitApplication(application: Application): Observable<number> {
        let bodyString = JSON.stringify(application); //Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option


        return this.http.get(this.classUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error('Error: ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }
}