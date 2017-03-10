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
export var Login = (function () {
    function Login(http) {
        this.http = http;
        this.result = {};
        console.log('Hello Login Provider');
    }
    Login.prototype.login = function (info) {
        var url = AppConfig.getProdUrl() + 'login';
        return this.http.post(url, JSON.stringify(info), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    Login.prototype.checkLogin = function (token) {
        var url = AppConfig.getProdUrl() + 'checkLogin';
        return this.http.post(url, JSON.stringify({ 'token': token }), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    Login.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Login.ctorParameters = [
        { type: Http, },
    ];
    return Login;
}());
//# sourceMappingURL=login.js.map