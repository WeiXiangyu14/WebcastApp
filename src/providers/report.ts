import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the Report provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Report {

  constructor(public http: Http) {
    console.log('Hello Report Provider');
  }

  report(info): any{
    let url = AppConfig.getProdUrl() + 'addReport';
    return this.http.post(url, JSON.stringify(info), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

}
