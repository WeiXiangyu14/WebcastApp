import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the TaskData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var TaskData = (function () {
    function TaskData(http) {
        this.http = http;
        console.log('Hello TaskData Provider');
    }
    TaskData.prototype.addTask = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'addTask';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.getTasksByState = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'getTasksByState';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.getMyTasks = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'getMyTasks';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.claimTask = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'claimTask';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.dropTask = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'dropTask';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.beginTask = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'beginTask';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.endTask = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'endTask';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.getTaskUrl = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'getTaskUrl';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.getTask = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'getTask';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.tipTask = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'addWallet';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.favorTask = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'favorTask';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.judgeTask = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'judgeTask';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TaskData.prototype.clickTaskTime = function (taskInfo) {
        var url = AppConfig.getProdUrl() + 'clickTaskTime';
        return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
            .map(function (res) { return res.json(); }).subscribe();
    };
    TaskData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TaskData.ctorParameters = [
        { type: Http, },
    ];
    return TaskData;
}());
//# sourceMappingURL=task-data.js.map