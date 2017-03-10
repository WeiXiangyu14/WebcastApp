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
export var Report = (function () {
    function Report(http) {
        this.http = http;
        console.log('Hello Report Provider');
    }
    Report.prototype.report = function (info) {
        var url = AppConfig.getProdUrl() + 'addReport';
        return this.http.post(url, JSON.stringify(info), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    Report.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Report.ctorParameters = [
        { type: Http, },
    ];
    return Report;
}());
//# sourceMappingURL=report.js.map