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
export var UserData = (function () {
    function UserData(http) {
        this.http = http;
        console.log('Hello UserData Provider');
    }
    UserData.prototype.getPersonalInfo = function (token) {
        var url = AppConfig.getProdUrl() + 'getPersonalInfo';
        return this.http.post(url, JSON.stringify({ 'token': token }), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserData.prototype.updatePersonalInfo = function (userInfo) {
        var url = AppConfig.getProdUrl() + 'updatePersonalInfo';
        return this.http.post(url, JSON.stringify(userInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserData.prototype.getWallet = function (userInfo) {
        var url = AppConfig.getProdUrl() + 'getWallet';
        return this.http.post(url, JSON.stringify(userInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserData.prototype.getWalletHistory = function (userInfo) {
        var url = AppConfig.getProdUrl() + 'getWalletHistory';
        return this.http.post(url, JSON.stringify(userInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserData.prototype.updateGeolocation = function (userInfo) {
        var url = AppConfig.getProdUrl() + 'updateGeoLocation';
        return this.http.post(url, JSON.stringify(userInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserData.ctorParameters = [
        { type: Http, },
    ];
    return UserData;
}());
//# sourceMappingURL=user-data.js.map