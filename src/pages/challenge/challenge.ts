import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TaskDetailPage } from '../task-detail/task-detail';

import { TaskData } from '../../providers/task-data';
import { Storage } from '../../providers/storage';

/*
  Generated class for the Challenge page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-challenge',
  templateUrl: 'challenge.html',
  providers: [ TaskData, Storage ]
})
export class ChallengePage {

  tasks: Array<GoBoardTask>;
  taskDetailPage: any = TaskDetailPage;

  constructor(
    public navCtrl: NavController,
    public taskService: TaskData,
    public storageService: Storage
    ) {
    this.getTaskChallenge();  
  }

  ionViewDidLoad() {
    console.log('Hello ChallengePage Page');
  }

  getTaskChallenge(){
    var token = this.storageService.read('token');
    var taskInfo = {
      'token': token,
      'my_task': 'challenge'
    }
    this.taskService.getMyTasks(taskInfo)
    .subscribe(
      data => {
        if(data['succeed']){
          this.tasks = data['info'];
          for(var i = 0; i < this.tasks.length; i++){
            switch(this.tasks[i].state){
            case 'doing':
              this.tasks[i].taskTypeNumber = 0;
              break;
            case 'toDo':
              this.tasks[i].taskTypeNumber = 1;
              break;
            case 'waiting':
              this.tasks[i].taskTypeNumber = 2;
              break;
            case 'judge':
              if(this.tasks[i]['hasJudge'] == 1){
                this.tasks[i].taskTypeNumber = 31;
              }
              else{
                if(this.tasks[i]['hasJudge'] == 2){
                  this.tasks[i].taskTypeNumber = 32;
                } 
                else{
                  this.tasks[i].taskTypeNumber = 33;
                }
              }
              break;
            case 'done':
              if(this.tasks[i].result == 'succeed'){
                this.tasks[i].taskTypeNumber = 41;
              }
              else{
                this.tasks[i].taskTypeNumber = 42;
              }
              break;
            case 'timeout':
              this.tasks[i].taskTypeNumber = 5;
              break;
            default:
              break;
            }
          }
          console.log(this.tasks);
        }
      }
    );
  }

  onTaskClick(task: any, taskType: any){
    console.log(task);
    this.clickTaskTime(task.taskId);
    this.navCtrl.push(this.taskDetailPage, {'task': task, 'taskType': taskType});
  }

  ionViewWillEnter() {
    console.log('page enter');
    this.getTaskChallenge();
  }

  clickTaskTime(taskId){
    var token = this.storageService.read('token');
    var taskInfo = {
      'token': token,
      'taskId': taskId,
      'observe': 'false'
    }
    this.taskService.clickTaskTime(taskInfo);
  }

}

export interface GoBoardTask {
  taskInitiator: {id: string, name: string, title: string};
  taskRecipient: {id: string, name: string, title: string}; 
  taskName: string;
  taskDescription: string;
  taskOrder: number;
  result: string;
  state: string;
  taskTypeNumber: number;
}
