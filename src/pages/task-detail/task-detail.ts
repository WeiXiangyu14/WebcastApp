import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser} from 'ionic-native';

import { LoginPage } from '../login/login';
import { ReportPage } from '../report/report';

import { TaskData } from '../../providers/task-data';
import { Storage } from '../../providers/storage';

/*
  Generated class for the WaitingDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html',
  providers: [ TaskData, Storage ]
})
export class TaskDetailPage {
  task: any;
  taskType: any;
  taskTypeNumber: number;

  loginPage: any = LoginPage;
  reportPage: any = ReportPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public taskService: TaskData,
    public storageService: Storage
    ) {
      this.task = this.navParams.get('task');
      this.taskType = this.navParams.get('taskType');
      this.changeTaskType();
    }

  changeTaskType(){
    if(this.taskType == 'doing'){
        this.taskTypeNumber = 0;
      }
      else{
        if(this.taskType == 'toDo'){
          this.taskTypeNumber = 1;
        }
        else{
          if(this.taskType == 'waiting'){
            this.taskTypeNumber = 2;
          }
          else{
            if(this.taskType == 'judge'){
              this.taskTypeNumber = 3;
            }
            else{
              if(this.taskType == 'done'){
                if(this.task['result'] == 'succeed'){
                  this.taskTypeNumber = 41;
                }
                else{
                  this.taskTypeNumber = 42;
                }
              }
              else{
                if(this.taskType == 'timeout'){
                  this.taskTypeNumber = 5;
                }
              }
            }
          }
        }
      }
  }

  ionViewDidLoad() {
    console.log('Hello TaskDetail Page');
  }

  onMessage() {

  }

  getTask(taskId){
    var token = this.storageService.read('token');
    var taskInfo = {
      'id': taskId,
      'token': token
    };
    this.taskService.getTask(taskInfo)
    .subscribe(
      data=>{
        if(data['succeed']){
          this.task = data['info'];
          this.taskType = this.task['state'];
          this.changeTaskType();
        }
        else{
          console.log(data);
        }
      }
    )
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
          console.log(data);
          let alert = this.alertCtrl.create({
            title: '任务领取成功',
            subTitle: '任务领取成功，请按时完成获取奖励！',
            buttons: [
              {
                text: '确认',
                handler: ()=>{
                  this.getTask(taskId);
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
              subTitle: '任务领取失败，请登录后重新领取',
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

  dropTask(taskId){
    let alertWarning = this.alertCtrl.create({
      subTitle: '放弃直播将影响您的主播信誉',
      buttons: [
        {
          text: '再想想',
          handler: ()=>{}
        },
        {
          text: '确认放弃',
          handler: ()=>{
            this.dropTheTask(taskId);
          }
        }
      ]
    });
    alertWarning.present();
  }

  judgeTask(taskId){
    console.log("judge task");
    var token = this.storageService.read('token');
    let alertWarning = this.alertCtrl.create({
      title: '评价任务',
      subTitle: '请您认真客观评价任务完成情况。',
      buttons: [
        {
          text: '任务完成',
          handler: ()=>{
            console.log("succeed");
            this.taskService.judgeTask({'token': token, 'task_id': taskId, 'judge_result': 'succeed'}).subscribe(
              data => {
                this.getTask(taskId);
              }
            );
          }
        },
        {
          text: '任务失败',
          handler: ()=>{
            console.log("fail");
            this.taskService.judgeTask({'token': token, 'task_id': taskId, 'judge_result': 'fail'}).subscribe(
              data => {
                if(data['succeed']){
                  this.getTask(taskId);
                }
                else{
                  if(data['errno'] == 9000){
                    let alert = this.alertCtrl.create({
                      title: '评价任务失败',
                      subTitle: '评价任务失败，请登录后重新操作',
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
                }
              }
            );
          }
        },
        {
          text: '举报',
          handler: ()=>{
            console.log("report");
            this.navCtrl.push(this.reportPage);
          }
        }
      ]
    });
    alertWarning.present();
  }

  dropTheTask(taskId){
    var token = this.storageService.read('token');
    var taskInfo = {
      'token': token,
      'id': taskId,
      'state': 'waiting'
    };
    console.log(taskInfo);
    this.taskService.dropTask(taskInfo)
    .subscribe(
      data=>{
        if(data['succeed']){
          console.log(data);
          let alert = this.alertCtrl.create({
            title: '放弃任务成功',
            subTitle: '放弃任务成功，请前往广场领取您喜欢的任务！',
            buttons: [
              {
                text: '确认',
                handler: ()=>{
                  this.getTask(taskId);
                }
              }
            ]
          });
          alert.present();
        }
        else{
          if(data['errno'] == 9000){
            let alert = this.alertCtrl.create({
              title: '放弃任务失败',
              subTitle: '放弃任务失败，请登录后重新操作',
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
            if(data['errno'] == 5006){
              let alert = this.alertCtrl.create({
                title: '不是任务领取人',
                subTitle: '放弃任务失败，请登录后重新操作',
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
              let alert = this.alertCtrl.create({
                title: '放弃任务失败',
                subTitle: '任务领取失败，请重新尝试操作',
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
          }
        }
      }
    );
  }

  beginTask(taskId){
    var token = this.storageService.read('token');
    var taskInfo = {
      'token': token,
      'id': taskId,
      'state': 'doing'
    };
    console.log(taskInfo);
    this.taskService.beginTask(taskInfo)
    .subscribe(
      data=>{
        if(data['succeed']){
          console.log(data);
          let alert = this.alertCtrl.create({
            title: '直播已经开始',
            subTitle: '直播已经开始，请立即前往花椒开始直播！',
            buttons: [
              {
                text: '确认',
                handler: ()=>{
                  this.getTask(taskId);
                }
              }
            ]
          });
          alert.present();
        }
        else{
          if(data['errno'] == 9000){
            let alert = this.alertCtrl.create({
              title: '开始直播失败',
              subTitle: '开始直播失败，请登录后重新操作',
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
            if(data['errno'] == 2011){
              let alert = this.alertCtrl.create({
                title: '开始直播失败',
                subTitle: '个人信息填写不完整，请前往个人主页完善个人信息',
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
              if(data['errno'] == 5013){
                let alert = this.alertCtrl.create({
                  title: '开始直播失败',
                  subTitle: '未到任务规定的开始时间！',
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
      }
    );
  }

  endTask(taskId){
    var token = this.storageService.read('token');
    var taskInfo = {
      'token': token,
      'id': taskId,
      'state': 'done'
    };
    console.log(taskInfo);
    this.taskService.endTask(taskInfo)
    .subscribe(
      data=>{
        if(data['succeed']){
          console.log(data);
          let alert = this.alertCtrl.create({
            title: '直播结束成功',
            subTitle: '直播结束，感谢您的使用！',
            buttons: [
              {
                text: '确认',
                handler: ()=>{
                  this.navCtrl.pop();
                }
              }
            ]
          });
          alert.present();
        }
        else{
          if(data['errno'] == 9000){
            let alert = this.alertCtrl.create({
              title: '直播结束失败',
              subTitle: '直播结束失败，请登录后重新操作',
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
            let alert = this.alertCtrl.create({
              title: '直播结束失败',
              subTitle: '直播结束失败，请重新尝试操作',
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
        }
      }
    );
  }

  observeTask(taskRecipientId, taskId){
    var taskInfo = { 'student_id': taskRecipientId };
    this.taskService.getTaskUrl(taskInfo)
    .subscribe(
      data=>{
        console.log(data);
        if(data['succeed']){
          let browser = new InAppBrowser(data['info']['url'], '_blank', "location=true");
        }
        else{
          let alert = this.alertCtrl.create({
            title: '请耐心等待',
            subTitle: '主播正在努力打开花椒，请稍后尝试观看',
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
      }
    );
    var token = this.storageService.read('token');
    var newTaskInfo = {
      'taskId': taskId,
      'token': token,
      'observe': 'true'
    }
    this.taskService.clickTaskTime(newTaskInfo);
  }

  remainTask(taskId){
    let alert = this.alertCtrl.create({
      title: '开启提醒',
      subTitle: '目前暂未开启，尽请期待',
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

  favor(taskId){
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
          this.getTask(taskId);
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

  tip(taskId, taskName){
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
          this.getTask(taskId);
        }
        else{
          if(data['errno'] == 9000){
            let alert = this.alertCtrl.create({
              title: '请先登录',
              subTitle: '请登录后重新操作',
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
