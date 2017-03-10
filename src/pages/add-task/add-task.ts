import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { AppConfig } from '../../app/app.config';

import { LoginPage } from '../login/login'

import { TaskData } from '../../providers/task-data'
import { Storage } from '../../providers/storage'

/*
  Generated class for the AddTask page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
  providers: [ TaskData, Storage ]

})
export class AddTaskPage {
  public task: {
    token: any,
    taskRecipient: string,
    taskName: string,
    taskDescription: string,
    taskPosition: string,
    taskStartTime: string,
    taskEndTime: string,
    taskReward: string,
    taskLatitude: any,
    taskLongitude: any
  }

  loginPage: any = LoginPage;

  minStartTime: string = "2017-01-01";
  minEndTime: string = "2017-01-01";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public taskService: TaskData,
    public storageService: Storage,
    private formBuilder: FormBuilder) {
      var date = new Date();
      date.setDate(new Date().getDate() + 1);
      var startTime = date.getFullYear() + '-' + this.prefix(2, date.getMonth() + 1) + '-' + this.prefix(2, date.getDate());
      date.setDate(new Date().getDate() + 2);
      var endTime = date.getFullYear() + '-' + this.prefix(2, date.getMonth() + 1) + '-' + this.prefix(2, date.getDate());
      console.log(startTime);
      console.log(endTime);
      var task_recipient = this.navParams.get('task_recipient');
      this.task = {
        token: '',
        taskRecipient: task_recipient,
        taskName: '',
        taskDescription: '',
        taskPosition: '',
        taskLatitude: 0,
        taskLongitude: 0,
        taskStartTime: startTime,
        taskEndTime: endTime,
        taskReward: '1'
      };
      this.minStartTime = startTime;
      this.minEndTime = endTime;
    }
  
  // taskForm = this.formBuilder.group({
  //   'TaskName': ['', [Validators.required]],
  //   'TaskDescription': ['', [Validators.required]],
  //   'taskPosition': ['', [Validators.required]],
  //   'TaskTime': ['', [Validators.required]],
  //   'TaskReward': ['', [Validators.required]]
  // });

  ionViewDidLoad() {
    console.log('Hello AddTaskPage Page');
  }

  onMessage(){

  }

  prefix(num, val) {
    return (new Array(num).join('0') + val).slice(-num);
  }

  updateEndTime() {
    var date = new Date(this.task.taskStartTime);
    date.setDate(date.getDate() + 1);
    this.minEndTime = date.getFullYear() + '-' + this.prefix(2, date.getMonth() + 1) + '-' + this.prefix(2, date.getDate());
    this.task.taskEndTime = this.minEndTime;
  }

  autoPosition() {
    console.log('自动定位');
    this.updatePosition();
  }

  updatePosition(){
    var is_update = this.storageService.read('update');
    if(is_update == 'true') {
        this.task.taskPosition = this.storageService.read('position').toString();
        this.task.taskLatitude = this.storageService.read('lat');
        this.task.taskLongitude = this.storageService.read('long');
    } else{
        setTimeout(() => {
          //将获得的经纬度信息，放入sessionStorge
          this.updatePosition();
        },1000)
    }
  }

  checkTask() {
    if(this.task.taskLatitude == 0){
      this.storageService.write('position', this.task.taskPosition);
      var temp_Storage = this.storageService;
      // var map = new AMap.Map("mapContainer", {
      //   resizeEnable: true
      // });
      var map = AppConfig.getMap();
      AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            count: 1,
            pageIndex: 1,
            pageSize: 1,
            map: map
        });
        //关键字查询
        var position = temp_Storage.read('position').toString();
        temp_Storage.write('addUpdateGPS', 'false');
        placeSearch.search(position, function(status, result) {
          console.log(position);
          console.log(result);
          temp_Storage.write('lat', result.poiList.pois[0].location.lat);
          temp_Storage.write('long', result.poiList.pois[0].location.lng);
          temp_Storage.write('addUpdateGPS', 'true');
        });
      });
      this.readyForTask();
    }
    else{
      this.addTask();
    }
  }
  
  readyForTask() {
    var flag = this.storageService.read('addUpdateGPS');
    console.log('flag===' + flag);
    if(flag == 'true'){
      this.task.taskLatitude = this.storageService.read('lat');
      this.task.taskLongitude = this.storageService.read('long');
      this.addTask();
    }
    else{
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.readyForTask();
      }, 1000);
    }
  }

  addTask() {
    console.log(this.task);
    var token = this.storageService.read('token');
    if(token == null) {
      token = 'null';
    }
    // this.checkTask();
    this.task['token'] = token;
    this.taskService.addTask(this.task)
    .subscribe(
      data=>{
        console.log(data);
        if(data['succeed']){
          let alert = this.alertCtrl.create({
            title: '发布成功',
            subTitle: '任务发布成功，请耐心等候任务被领取。',
            buttons: [
              {
                text: '确认',
                handler: ()=>{
                  this.navCtrl.pop();
                }
              }
            ],
            enableBackdropDismiss: false
          });
          alert.present();
        }
        else{
          if(data['errno'] == 9000){
            let alert = this.alertCtrl.create({
              title: '发布失败',
              subTitle: '任务发布失败，请登录后重新发布',
              buttons: [
                {
                  text: '确认',
                  handler: ()=>{
                    this.navCtrl.push(this.loginPage, {flag: 'back', page: null});
                  }
                }
              ],
              enableBackdropDismiss: false
            });
            alert.present();
          }
          else{
            let alert = this.alertCtrl.create({
              title: '发布失败',
              subTitle: '任务发布失败，请重新尝试发布',
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
        }
      }
    );
  }
  
}
