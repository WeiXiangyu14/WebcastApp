import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { InAppBrowser, ThemeableBrowser } from 'ionic-native';

import { AddTaskPage } from '../add-task/add-task';
import { LoginPage } from '../login/login';
import { TaskDetailPage } from '../task-detail/task-detail';

import { TaskData } from '../../providers/task-data';
import { Storage } from '../../providers/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ TaskData, Storage ]
})
export class HomePage {
  taskType: string = 'doing';

  addTaskPage: any = AddTaskPage;
  loginPage: any = LoginPage;
  taskDetailPage: any = TaskDetailPage;

  tasksDoing: Array<GoBoardTask>;
  tasksToDo: Array<GoBoardTask>;
  tasksWaiting: Array<GoBoardTask>;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public taskService: TaskData,
    public storageService: Storage
    ) {
      this.searchByDoing();
  }

  ionViewWillEnter() {
    if(this.taskType == 'doing'){
      this.searchByDoing();
    }
    else{
      if(this.taskType == 'toDo') {
        this.searchByToDo();
      }
      else{
        if(this.taskType == 'waiting'){
          this.searchByWaiting();
        }
      }
    }
  }

  addTask(){
    this.navCtrl.push(this.addTaskPage, {'task_recipient': {'id': ''}});
  }

  onMessage(){

  }

  onTaskClick(task: any, taskType: any){
    console.log(task);
    this.clickTaskTime(task.id);
    this.navCtrl.push(this.taskDetailPage, {'task': task, 'taskType': taskType});
  }

  searchByDoing(){
    this.searchByState('doing');
  }

  searchByToDo(){
    this.searchByState('toDo');
  }

  searchByWaiting(){
    this.searchByState('waiting');
  }

  searchByState(state){
    var token = this.storageService.read('token');
    this.taskService.getTasksByState({'token': token, 'state': state})
    .subscribe(
      data=>{
        console.log(data);
        if(data['succeed']){
          switch(state){
            case 'doing':
              this.tasksDoing = data['info'];
              this.init(this.tasksDoing);
              break;
            case 'toDo':
              this.tasksToDo = data['info'];
              this.init(this.tasksToDo);
              break;
            case 'waiting':
              this.tasksWaiting = data['info'];
              this.init(this.tasksWaiting);
              break;
            default:
              break;
          }
        }
      }
    )
  }

  init(tasks: Array<GoBoardTask>){
    for(var i = 0; i < tasks.length; i++){
      tasks[i].taskOrder = i;
      if(tasks[i].taskLeftTime.secondsRemaining > 0 ){
        tasks[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(tasks[i].taskLeftTime.secondsRemaining);
        this.timerTick(tasks[i]);
      }
      else{
        tasks[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(0);
      }
    }
  }

  timerTick(task: GoBoardTask) {
    setTimeout(() => {
      if (!task.taskLeftTime.runTimer) { return; }
      task.taskLeftTime.secondsRemaining--;
      task.taskLeftTime.displayTime = this.getSecondsAsDigitalClock(task.taskLeftTime.secondsRemaining);
      if (task.taskLeftTime.secondsRemaining > 0) {
        this.timerTick(task);
      }
      else {
        task.taskLeftTime.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

  claimTask(taskId){
    var token = this.storageService.read('token');
    var taskInfo = {
      'token': token,
      'id': taskId,
      'state': 'toDo'
    };
    console.log(taskInfo);
    this.taskService.claimTask(taskInfo)
    .subscribe(
      data=>{
        if(data['succeed']){
          let alert = this.alertCtrl.create({
            title: '任务领取成功',
            subTitle: '任务领取成功，请按时完成获取奖励！',
            buttons: [
              {
                text: '确认',
                handler: ()=>{
                  this.searchByWaiting();
                }
              }
            ]
          });
          alert.present();
        }
        else{
          if(data['errno'] == 9000){
            let alert = this.alertCtrl.create({
              title: '领取任务失败',
              subTitle: '任务领取失败，请登录后重新领取！',
              buttons: [
                {
                  text: '确认',
                  handler: ()=>{
                    this.navCtrl.push(this.loginPage, {flag: 'back', page: null});
                  }
                }
              ]
            });
            alert.present();
          }
          else{
            if(data['errno'] == 5011){
              let alert = this.alertCtrl.create({
                title: '任务领取失败',
                subTitle: '任务发布者与接收者不能为同一个人！',
                buttons: [
                  {
                    text: '确认',
                    handler: ()=>{
                      console.log(data['errno']);
                    }
                  }
                ]
              });
              alert.present();
            }
            else{
              console.log(data['errno']);
            }
          }
        }
      }
    );
  }

  clickTaskTime(taskId){
    var token = this.storageService.read('token');
    var taskInfo = {
      'token': token,
      'taskId': taskId,
      'observe': 'false'
    }
    console.log("click task");
    this.taskService.clickTaskTime(taskInfo);
  }

  favor(taskId, taskOrder){
    console.log('favor');
    var token = this.storageService.read('token');
    var taskInfo = {
      'token': token,
      'task_id': taskId
    };
    console.log(taskInfo);
    this.taskService.favorTask(taskInfo)
    .subscribe(
      data=>{
        if(data['succeed']){
          console.log(data);
          if(this.taskType == 'doing'){
            this.searchByDoing();
          }
          else{
            if(this.taskType == 'toDo'){
              this.searchByToDo();
            }
            else{
              this.searchByWaiting();
            }
          }
        }
        else{
          if(data['errno'] == 9000){
            let alert = this.alertCtrl.create({
              title: '请先登录',
              subTitle: '请登录后重新操作！',
              buttons: [
                {
                  text: '确认',
                  handler: ()=>{
                    this.navCtrl.push(this.loginPage, {flag: 'back', page: null});
                  }
                }
              ]
            });
            alert.present();
          }
          else{
            if(data['errno'] == 6004){
              let alert = this.alertCtrl.create({
                title: '点赞失败',
                subTitle: '不可以对自己所接任务进行点赞！',
                buttons: [
                  {
                    text: '确认',
                    handler: ()=>{
                    }
                  }
                ]
              });
              alert.present();
            }
            else{
              if(data['errno'] == 5012){
                let alert = this.alertCtrl.create({
                  title: '打赏失败',
                  subTitle: '任务已经结束，不可点赞！',
                  buttons: [
                    {
                      text: '确认',
                      handler: ()=>{
                      }
                    }
                  ]
                });
                alert.present();
              }
              else{
                console.log(data['errno']);
              }
            }
          }
        }
      }
    );
  }

  tip(taskId, taskName, taskOrder){
    console.log('tip');
    var token = this.storageService.read('token');
    var taskInfo = {
      'token': token,
      'task_id': taskId,
      'task_name': taskName,
      'number': 1,
      'task_type': 'observe',
      'wallet_type': 'goldCoin'
    };
    console.log(taskInfo);
    this.taskService.tipTask(taskInfo)
    .subscribe(
      data=>{
        if(data['succeed']){
          console.log(data);
          if(this.taskType == 'doing'){
            this.searchByDoing();
          }
          else{
            if(this.taskType == 'toDo'){
              this.searchByToDo();
            }
            else{
              this.searchByWaiting();
            }
          }
        }
        else{
          if(data['errno'] == 9000){
            let alert = this.alertCtrl.create({
              title: '请先登录',
              subTitle: '请登录后重新操作！',
              buttons: [
                {
                  text: '确认',
                  handler: ()=>{
                    this.navCtrl.push(this.loginPage, {flag: 'back', page: null});
                  }
                }
              ]
            });
            alert.present();
          }
          else{
            if(data['errno'] == 6003){
              let alert = this.alertCtrl.create({
                title: '打赏失败',
                subTitle: '不可以对自己所接任务进行打赏！',
                buttons: [
                  {
                    text: '确认',
                    handler: ()=>{
                    }
                  }
                ]
              });
              alert.present();
            }
            else{
              if(data['errno'] == 5012){
                let alert = this.alertCtrl.create({
                  title: '打赏失败',
                  subTitle: '任务已经结束，不可打赏！',
                  buttons: [
                    {
                      text: '确认',
                      handler: ()=>{
                      }
                    }
                  ]
                });
                alert.present();
              }
              else{
                console.log(data['errno']);
              }
            }
          }
        }
      }
    );
  }

}

export interface ITimer {
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}

export interface GoBoardTask {
  taskInitiator: {id: string, name: string, title: string};
  taskRecipient: {id: string, name: string, title: string}; 
  taskName: string;
  taskDescription: string;
  taskLeftTime: ITimer;
  taskOrder: number;
}
