import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import 'rxjs/add/operator/toPromise';


/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {


  constructor(public http: Http) {
    console.log('Hello UserData Provider');
  }

  getPersonalInfo(token): any{
    let url = AppConfig.getProdUrl() + 'getPersonalInfo';
    return this.http.post(url, JSON.stringify({'token': token}), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  updatePersonalInfo(userInfo): any{
    let url = AppConfig.getProdUrl() + 'updatePersonalInfo';
    return this.http.post(url, JSON.stringify(userInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  getWallet(userInfo): any{
    let url = AppConfig.getProdUrl() + 'getWallet';
    return this.http.post(url, JSON.stringify(userInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  getWalletHistory(userInfo): any{
    let url = AppConfig.getProdUrl() + 'getWalletHistory';
    return this.http.post(url, JSON.stringify(userInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  updateGeolocation(userInfo): any{
    let url = AppConfig.getProdUrl() + 'updateGeoLocation';
    return this.http.post(url, JSON.stringify(userInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

}
