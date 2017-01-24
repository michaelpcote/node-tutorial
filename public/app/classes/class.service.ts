import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IClass } from './class';

@Injectable()
export class ClassService {
    //private classUrl = 'http://localhost:3000/api/classes';
    private classUrl = 'api/classes/classes.json';

    constructor(private http: Http) { }

    getClasses(): Observable<IClass[]> {
        return this.http.get(this.classUrl)
            .map((response: Response) => <IClass[]> response.json())
            .do(data => console.log('getClasses: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }
}