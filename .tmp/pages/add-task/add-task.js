import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AppConfig } from '../../app/app.config';
import { LoginPage } from '../login/login';
import { TaskData } from '../../providers/task-data';
import { Storage } from '../../providers/storage';
/*
  Generated class for the AddTask page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var AddTaskPage = (function () {
    function AddTaskPage(navCtrl, navParams, alertCtrl, loadingCtrl, taskService, storageService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.taskService = taskService;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this.loginPage = LoginPage;
        this.minStartTime = "2017-01-01";
        this.minEndTime = "2017-01-01";
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
    AddTaskPage.prototype.ionViewDidLoad = function () {
        console.log('Hello AddTaskPage Page');
    };
    AddTaskPage.prototype.onMessage = function () {
    };
    AddTaskPage.prototype.prefix = function (num, val) {
        return (new Array(num).join('0') + val).slice(-num);
    };
    AddTaskPage.prototype.updateEndTime = function () {
        var date = new Date(this.task.taskStartTime);
        date.setDate(date.getDate() + 1);
        this.minEndTime = date.getFullYear() + '-' + this.prefix(2, date.getMonth() + 1) + '-' + this.prefix(2, date.getDate());
        this.task.taskEndTime = this.minEndTime;
    };
    AddTaskPage.prototype.autoPosition = function () {
        console.log('自动定位');
        this.updatePosition();
    };
    AddTaskPage.prototype.updatePosition = function () {
        var _this = this;
        var is_update = this.storageService.read('update');
        if (is_update == 'true') {
            this.task.taskPosition = this.storageService.read('position').toString();
            this.task.taskLatitude = this.storageService.read('lat');
            this.task.taskLongitude = this.storageService.read('long');
        }
        else {
            setTimeout(function () {
                //将获得的经纬度信息，放入sessionStorge
                _this.updatePosition();
            }, 1000);
        }
    };
    AddTaskPage.prototype.checkTask = function () {
        if (this.task.taskLatitude == 0) {
            this.storageService.write('position', this.task.taskPosition);
            var temp_Storage = this.storageService;
            // var map = new AMap.Map("mapContainer", {
            //   resizeEnable: true
            // });
            var map = AppConfig.getMap();
            AMap.service(["AMap.PlaceSearch"], function () {
                var placeSearch = new AMap.PlaceSearch({
                    count: 1,
                    pageIndex: 1,
                    pageSize: 1,
                    map: map
                });
                //关键字查询
                var position = temp_Storage.read('position').toString();
                temp_Storage.write('addUpdateGPS', 'false');
                placeSearch.search(position, function (status, result) {
                    console.log(position);
                    console.log(result);
                    temp_Storage.write('lat', result.poiList.pois[0].location.lat);
                    temp_Storage.write('long', result.poiList.pois[0].location.lng);
                    temp_Storage.write('addUpdateGPS', 'true');
                });
            });
            this.readyForTask();
        }
        else {
            this.addTask();
        }
    };
    AddTaskPage.prototype.readyForTask = function () {
        var _this = this;
        var flag = this.storageService.read('addUpdateGPS');
        console.log('flag===' + flag);
        if (flag == 'true') {
            this.task.taskLatitude = this.storageService.read('lat');
            this.task.taskLongitude = this.storageService.read('long');
            this.addTask();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            setTimeout(function () {
                loading_1.dismiss();
                _this.readyForTask();
            }, 1000);
        }
    };
    AddTaskPage.prototype.addTask = function () {
        var _this = this;
        console.log(this.task);
        var token = this.storageService.read('token');
        if (token == null) {
            token = 'null';
        }
        // this.checkTask();
        this.task['token'] = token;
        this.taskService.addTask(this.task)
            .subscribe(function (data) {
            console.log(data);
            if (data['succeed']) {
                var alert_1 = _this.alertCtrl.create({
                    title: '发布成功',
                    subTitle: '任务发布成功，请耐心等候任务被领取。',
                    buttons: [
                        {
                            text: '确认',
                            handler: function () {
                                _this.navCtrl.pop();
                            }
                        }
                    ],
                    enableBackdropDismiss: false
                });
                alert_1.present();
            }
            else {
                if (data['errno'] == 9000) {
                    var alert_2 = _this.alertCtrl.create({
                        title: '发布失败',
                        subTitle: '任务发布失败，请登录后重新发布',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    _this.navCtrl.push(_this.loginPage, { flag: 'back', page: null });
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    alert_2.present();
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: '发布失败',
                        subTitle: '任务发布失败，请重新尝试发布',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                }
                            }
                        ]
                    });
                    alert_3.present();
                }
            }
        });
    };
    AddTaskPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-add-task',
                    templateUrl: 'add-task.html',
                    providers: [TaskData, Storage]
                },] },
    ];
    /** @nocollapse */
    AddTaskPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: AlertController, },
        { type: LoadingController, },
        { type: TaskData, },
        { type: Storage, },
        { type: FormBuilder, },
    ];
    return AddTaskPage;
}());
//# sourceMappingURL=add-task.js.map