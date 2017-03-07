import { Commune } from './commune';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Headers, Http, RequestOptionsArgs, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommuneService {

  private serviceUrl = 'http://localhost:8080/api/v1/communes';

  constructor(private http: Http) { }

  getCommunes(): Observable<Commune[]> {
    return this.http.get(this.serviceUrl)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCommune(codeRegion: string, codeDepartement: string, codeCommune: string): Promise<Commune> {
    return this.getCommunes().toPromise()
      .then(communes => communes.find(commune => commune.codeRegion === codeRegion
        && commune.codeDepartement === codeDepartement
        && commune.codeCommune === codeCommune));
  }
}

