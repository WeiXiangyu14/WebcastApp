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
@Injectable()
export class TaskData {

  constructor(public http: Http) {
    console.log('Hello TaskData Provider');
  }

  addTask(taskInfo): any {
    let url = AppConfig.getProdUrl() + 'addTask';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  getTasksByState(taskInfo): any {
    let url = AppConfig.getProdUrl() + 'getTasksByState';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  getMyTasks(taskInfo): any{
    let url = AppConfig.getProdUrl() + 'getMyTasks';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  claimTask(taskInfo): any {
    let url = AppConfig.getProdUrl() + 'claimTask';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  dropTask(taskInfo): any {
    let url = AppConfig.getProdUrl() + 'dropTask';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  beginTask(taskInfo): any {
    let url = AppConfig.getProdUrl() + 'beginTask';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  endTask(taskInfo): any {
    let url = AppConfig.getProdUrl() + 'endTask';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  getTaskUrl(taskInfo): any {
    let url = AppConfig.getProdUrl() + 'getTaskUrl';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  getTask(taskInfo): any{
    let url = AppConfig.getProdUrl() + 'getTask';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  tipTask(taskInfo): any{
    let url = AppConfig.getProdUrl() + 'addWallet';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  favorTask(taskInfo): any{
    let url = AppConfig.getProdUrl() + 'favorTask';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }
  
  judgeTask(taskInfo): any{
    let url = AppConfig.getProdUrl() + 'judgeTask';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json());
  }

  clickTaskTime(taskInfo): any{
    let url = AppConfig.getProdUrl() + 'clickTaskTime';
    return this.http.post(url, JSON.stringify(taskInfo), { headers: AppConfig.getHeaders() })
      .map(res => res.json()).subscribe();
  }

}
