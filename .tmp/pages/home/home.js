import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AddTaskPage } from '../add-task/add-task';
import { LoginPage } from '../login/login';
import { TaskDetailPage } from '../task-detail/task-detail';
import { TaskData } from '../../providers/task-data';
import { Storage } from '../../providers/storage';
export var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, taskService, storageService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.taskService = taskService;
        this.storageService = storageService;
        this.taskType = 'doing';
        this.addTaskPage = AddTaskPage;
        this.loginPage = LoginPage;
        this.taskDetailPage = TaskDetailPage;
        this.searchByDoing();
    }
    HomePage.prototype.ionViewWillEnter = function () {
        if (this.taskType == 'doing') {
            this.searchByDoing();
        }
        else {
            if (this.taskType == 'toDo') {
                this.searchByToDo();
            }
            else {
                if (this.taskType == 'waiting') {
                    this.searchByWaiting();
                }
            }
        }
    };
    HomePage.prototype.addTask = function () {
        this.navCtrl.push(this.addTaskPage, { 'task_recipient': { 'id': '' } });
    };
    HomePage.prototype.onMessage = function () {
    };
    HomePage.prototype.onTaskClick = function (task, taskType) {
        console.log(task);
        this.clickTaskTime(task.id);
        this.navCtrl.push(this.taskDetailPage, { 'task': task, 'taskType': taskType });
    };
    HomePage.prototype.searchByDoing = function () {
        this.searchByState('doing');
    };
    HomePage.prototype.searchByToDo = function () {
        this.searchByState('toDo');
    };
    HomePage.prototype.searchByWaiting = function () {
        this.searchByState('waiting');
    };
    HomePage.prototype.searchByState = function (state) {
        var _this = this;
        var token = this.storageService.read('token');
        this.taskService.getTasksByState({ 'token': token, 'state': state })
            .subscribe(function (data) {
            console.log(data);
            if (data['succeed']) {
                switch (state) {
                    case 'doing':
                        _this.tasksDoing = data['info'];
                        _this.init(_this.tasksDoing);
                        break;
                    case 'toDo':
                        _this.tasksToDo = data['info'];
                        _this.init(_this.tasksToDo);
                        break;
                    case 'waiting':
                        _this.tasksWaiting = data['info'];
                        _this.init(_this.tasksWaiting);
                        break;
                    default:
                        break;
                }
            }
        });
    };
    HomePage.prototype.init = function (tasks) {
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].taskOrder = i;
            if (tasks[i].taskLeftTime.secondsRemaining > 0) {
                tasks[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(tasks[i].taskLeftTime.secondsRemaining);
                this.timerTick(tasks[i]);
            }
            else {
                tasks[i].taskLeftTime.displayTime = this.getSecondsAsDigitalClock(0);
            }
        }
    };
    HomePage.prototype.timerTick = function (task) {
        var _this = this;
        setTimeout(function () {
            if (!task.taskLeftTime.runTimer) {
                return;
            }
            task.taskLeftTime.secondsRemaining--;
            task.taskLeftTime.displayTime = _this.getSecondsAsDigitalClock(task.taskLeftTime.secondsRemaining);
            if (task.taskLeftTime.secondsRemaining > 0) {
                _this.timerTick(task);
            }
            else {
                task.taskLeftTime.hasFinished = true;
            }
        }, 1000);
    };
    HomePage.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    HomePage.prototype.claimTask = function (taskId) {
        var _this = this;
        var token = this.storageService.read('token');
        var taskInfo = {
            'token': token,
            'id': taskId,
            'state': 'toDo'
        };
        console.log(taskInfo);
        this.taskService.claimTask(taskInfo)
            .subscribe(function (data) {
            if (data['succeed']) {
                var alert_1 = _this.alertCtrl.create({
                    title: '任务领取成功',
                    subTitle: '任务领取成功，请按时完成获取奖励！',
                    buttons: [
                        {
                            text: '确认',
                            handler: function () {
                                _this.searchByWaiting();
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                if (data['errno'] == 9000) {
                    var alert_2 = _this.alertCtrl.create({
                        title: '领取任务失败',
                        subTitle: '任务领取失败，请登录后重新领取！',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    _this.navCtrl.push(_this.loginPage, { flag: 'back', page: null });
                                }
                            }
                        ]
                    });
                    alert_2.present();
                }
                else {
                    if (data['errno'] == 5011) {
                        var alert_3 = _this.alertCtrl.create({
                            title: '任务领取失败',
                            subTitle: '任务发布者与接收者不能为同一个人！',
                            buttons: [
                                {
                                    text: '确认',
                                    handler: function () {
                                        console.log(data['errno']);
                                    }
                                }
                            ]
                        });
                        alert_3.present();
                    }
                    else {
                        console.log(data['errno']);
                    }
                }
            }
        });
    };
    HomePage.prototype.clickTaskTime = function (taskId) {
        var token = this.storageService.read('token');
        var taskInfo = {
            'token': token,
            'taskId': taskId,
            'observe': 'false'
        };
        console.log("click task");
        this.taskService.clickTaskTime(taskInfo);
    };
    HomePage.prototype.favor = function (taskId, taskOrder) {
        var _this = this;
        console.log('favor');
        var token = this.storageService.read('token');
        var taskInfo = {
            'token': token,
            'task_id': taskId
        };
        console.log(taskInfo);
        this.taskService.favorTask(taskInfo)
            .subscribe(function (data) {
            if (data['succeed']) {
                console.log(data);
                if (_this.taskType == 'doing') {
                    _this.searchByDoing();
                }
                else {
                    if (_this.taskType == 'toDo') {
                        _this.searchByToDo();
                    }
                    else {
                        _this.searchByWaiting();
                    }
                }
            }
            else {
                if (data['errno'] == 9000) {
                    var alert_4 = _this.alertCtrl.create({
                        title: '请先登录',
                        subTitle: '请登录后重新操作！',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    _this.navCtrl.push(_this.loginPage, { flag: 'back', page: null });
                                }
                            }
                        ]
                    });
                    alert_4.present();
                }
                else {
                    if (data['errno'] == 6004) {
                        var alert_5 = _this.alertCtrl.create({
                            title: '点赞失败',
                            subTitle: '不可以对自己所接任务进行点赞！',
                            buttons: [
                                {
                                    text: '确认',
                                    handler: function () {
                                    }
                                }
                            ]
                        });
                        alert_5.present();
                    }
                    else {
                        if (data['errno'] == 5012) {
                            var alert_6 = _this.alertCtrl.create({
                                title: '打赏失败',
                                subTitle: '任务已经结束，不可点赞！',
                                buttons: [
                                    {
                                        text: '确认',
                                        handler: function () {
                                        }
                                    }
                                ]
                            });
                            alert_6.present();
                        }
                        else {
                            console.log(data['errno']);
                        }
                    }
                }
            }
        });
    };
    HomePage.prototype.tip = function (taskId, taskName, taskOrder) {
        var _this = this;
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
            .subscribe(function (data) {
            if (data['succeed']) {
                console.log(data);
                if (_this.taskType == 'doing') {
                    _this.searchByDoing();
                }
                else {
                    if (_this.taskType == 'toDo') {
                        _this.searchByToDo();
                    }
                    else {
                        _this.searchByWaiting();
                    }
                }
            }
            else {
                if (data['errno'] == 9000) {
                    var alert_7 = _this.alertCtrl.create({
                        title: '请先登录',
                        subTitle: '请登录后重新操作！',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    _this.navCtrl.push(_this.loginPage, { flag: 'back', page: null });
                                }
                            }
                        ]
                    });
                    alert_7.present();
                }
                else {
                    if (data['errno'] == 6003) {
                        var alert_8 = _this.alertCtrl.create({
                            title: '打赏失败',
                            subTitle: '不可以对自己所接任务进行打赏！',
                            buttons: [
                                {
                                    text: '确认',
                                    handler: function () {
                                    }
                                }
                            ]
                        });
                        alert_8.present();
                    }
                    else {
                        if (data['errno'] == 5012) {
                            var alert_9 = _this.alertCtrl.create({
                                title: '打赏失败',
                                subTitle: '任务已经结束，不可打赏！',
                                buttons: [
                                    {
                                        text: '确认',
                                        handler: function () {
                                        }
                                    }
                                ]
                            });
                            alert_9.present();
                        }
                        else {
                            console.log(data['errno']);
                        }
                    }
                }
            }
        });
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html',
                    providers: [TaskData, Storage]
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
        { type: TaskData, },
        { type: Storage, },
    ];
    return HomePage;
}());
//# sourceMappingURL=home.js.map