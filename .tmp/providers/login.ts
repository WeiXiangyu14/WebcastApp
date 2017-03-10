import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Login {
  result: any = {};

  constructor(
    public http: Http
    ) {
    console.log('Hello Login Provider');
  }

  login(info): any {
    let url = AppConfig.getProdUrl() + 'login';
    return this.http.post(url, JSON.stringify(info), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  checkLogin(token): any {
    let url = AppConfig.getProdUrl() + 'checkLogin';
    return this.http.post(url, JSON.stringify({'token': token}), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

}
