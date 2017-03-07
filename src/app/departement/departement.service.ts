import { Departement } from './departement';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Headers, Http, RequestOptionsArgs, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DepartementService {

  private serviceUrl = 'http://localhost:8080/api/v1/departements';

  constructor(private http: Http) { }

  getDepartements(): Observable<Departement[]> {
    return this.http.get(this.serviceUrl)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

