import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { LoginPage } from '../login/login';
import { ReportPage } from '../report/report';
import { TaskData } from '../../providers/task-data';
import { Storage } from '../../providers/storage';
/*
  Generated class for the WaitingDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var TaskDetailPage = (function () {
    function TaskDetailPage(navCtrl, navParams, alertCtrl, taskService, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.taskService = taskService;
        this.storageService = storageService;
        this.loginPage = LoginPage;
        this.reportPage = ReportPage;
        this.task = this.navParams.get('task');
        this.taskType = this.navParams.get('taskType');
        this.changeTaskType();
    }
    TaskDetailPage.prototype.changeTaskType = function () {
        if (this.taskType == 'doing') {
            this.taskTypeNumber = 0;
        }
        else {
            if (this.taskType == 'toDo') {
                this.taskTypeNumber = 1;
            }
            else {
                if (this.taskType == 'waiting') {
                    this.taskTypeNumber = 2;
                }
                else {
                    if (this.taskType == 'judge') {
                        this.taskTypeNumber = 3;
                    }
                    else {
                        if (this.taskType == 'done') {
                            if (this.task['result'] == 'succeed') {
                                this.taskTypeNumber = 41;
                            }
                            else {
                                this.taskTypeNumber = 42;
                            }
                        }
                        else {
                            if (this.taskType == 'timeout') {
                                this.taskTypeNumber = 5;
                            }
                        }
                    }
                }
            }
        }
    };
    TaskDetailPage.prototype.ionViewDidLoad = function () {
        console.log('Hello TaskDetail Page');
    };
    TaskDetailPage.prototype.onMessage = function () {
    };
    TaskDetailPage.prototype.getTask = function (taskId) {
        var _this = this;
        var token = this.storageService.read('token');
        var taskInfo = {
            'id': taskId,
            'token': token
        };
        this.taskService.getTask(taskInfo)
            .subscribe(function (data) {
            if (data['succeed']) {
                _this.task = data['info'];
                _this.taskType = _this.task['state'];
                _this.changeTaskType();
            }
            else {
                console.log(data);
            }
        });
    };
    TaskDetailPage.prototype.claimTask = function (taskId) {
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
                console.log(data);
                var alert_1 = _this.alertCtrl.create({
                    title: '任务领取成功',
                    subTitle: '任务领取成功，请按时完成获取奖励！',
                    buttons: [
                        {
                            text: '确认',
                            handler: function () {
                                _this.getTask(taskId);
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
                        subTitle: '任务领取失败，请登录后重新领取',
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
    TaskDetailPage.prototype.dropTask = function (taskId) {
        var _this = this;
        var alertWarning = this.alertCtrl.create({
            subTitle: '放弃直播将影响您的主播信誉',
            buttons: [
                {
                    text: '再想想',
                    handler: function () { }
                },
                {
                    text: '确认放弃',
                    handler: function () {
                        _this.dropTheTask(taskId);
                    }
                }
            ]
        });
        alertWarning.present();
    };
    TaskDetailPage.prototype.judgeTask = function (taskId) {
        var _this = this;
        console.log("judge task");
        var token = this.storageService.read('token');
        var alertWarning = this.alertCtrl.create({
            title: '评价任务',
            subTitle: '请您认真客观评价任务完成情况。',
            buttons: [
                {
                    text: '任务完成',
                    handler: function () {
                        console.log("succeed");
                        _this.taskService.judgeTask({ 'token': token, 'task_id': taskId, 'judge_result': 'succeed' }).subscribe(function (data) {
                            _this.getTask(taskId);
                        });
                    }
                },
                {
                    text: '任务失败',
                    handler: function () {
                        console.log("fail");
                        _this.taskService.judgeTask({ 'token': token, 'task_id': taskId, 'judge_result': 'fail' }).subscribe(function (data) {
                            if (data['succeed']) {
                                _this.getTask(taskId);
                            }
                            else {
                                if (data['errno'] == 9000) {
                                    var alert_4 = _this.alertCtrl.create({
                                        title: '评价任务失败',
                                        subTitle: '评价任务失败，请登录后重新操作',
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
                            }
                        });
                    }
                },
                {
                    text: '举报',
                    handler: function () {
                        console.log("report");
                        _this.navCtrl.push(_this.reportPage);
                    }
                }
            ]
        });
        alertWarning.present();
    };
    TaskDetailPage.prototype.dropTheTask = function (taskId) {
        var _this = this;
        var token = this.storageService.read('token');
        var taskInfo = {
            'token': token,
            'id': taskId,
            'state': 'waiting'
        };
        console.log(taskInfo);
        this.taskService.dropTask(taskInfo)
            .subscribe(function (data) {
            if (data['succeed']) {
                console.log(data);
                var alert_5 = _this.alertCtrl.create({
                    title: '放弃任务成功',
                    subTitle: '放弃任务成功，请前往广场领取您喜欢的任务！',
                    buttons: [
                        {
                            text: '确认',
                            handler: function () {
                                _this.getTask(taskId);
                            }
                        }
                    ]
                });
                alert_5.present();
            }
            else {
                if (data['errno'] == 9000) {
                    var alert_6 = _this.alertCtrl.create({
                        title: '放弃任务失败',
                        subTitle: '放弃任务失败，请登录后重新操作',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    _this.navCtrl.push(_this.loginPage, { flag: 'back', page: null });
                                }
                            }
                        ]
                    });
                    alert_6.present();
                }
                else {
                    if (data['errno'] == 5006) {
                        var alert_7 = _this.alertCtrl.create({
                            title: '不是任务领取人',
                            subTitle: '放弃任务失败，请登录后重新操作',
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
                        var alert_8 = _this.alertCtrl.create({
                            title: '放弃任务失败',
                            subTitle: '任务领取失败，请重新尝试操作',
                            buttons: [
                                {
                                    text: '确认',
                                    handler: function () {
                                        console.log(data['errno']);
                                    }
                                }
                            ]
                        });
                        alert_8.present();
                    }
                }
            }
        });
    };
    TaskDetailPage.prototype.beginTask = function (taskId) {
        var _this = this;
        var token = this.storageService.read('token');
        var taskInfo = {
            'token': token,
            'id': taskId,
            'state': 'doing'
        };
        console.log(taskInfo);
        this.taskService.beginTask(taskInfo)
            .subscribe(function (data) {
            if (data['succeed']) {
                console.log(data);
                var alert_9 = _this.alertCtrl.create({
                    title: '直播已经开始',
                    subTitle: '直播已经开始，请立即前往花椒开始直播！',
                    buttons: [
                        {
                            text: '确认',
                            handler: function () {
                                _this.getTask(taskId);
                            }
                        }
                    ]
                });
                alert_9.present();
            }
            else {
                if (data['errno'] == 9000) {
                    var alert_10 = _this.alertCtrl.create({
                        title: '开始直播失败',
                        subTitle: '开始直播失败，请登录后重新操作',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    _this.navCtrl.push(_this.loginPage, { flag: 'back', page: null });
                                }
                            }
                        ]
                    });
                    alert_10.present();
                }
                else {
                    if (data['errno'] == 2011) {
                        var alert_11 = _this.alertCtrl.create({
                            title: '开始直播失败',
                            subTitle: '个人信息填写不完整，请前往个人主页完善个人信息',
                            buttons: [
                                {
                                    text: '确认',
                                    handler: function () {
                                        console.log(data['errno']);
                                    }
                                }
                            ]
                        });
                        alert_11.present();
                    }
                    else {
                        if (data['errno'] == 5013) {
                            var alert_12 = _this.alertCtrl.create({
                                title: '开始直播失败',
                                subTitle: '未到任务规定的开始时间！',
                                buttons: [
                                    {
                                        text: '确认',
                                        handler: function () {
                                            console.log(data['errno']);
                                        }
                                    }
                                ]
                            });
                            alert_12.present();
                        }
                        else {
                            console.log(data['errno']);
                        }
                    }
                }
            }
        });
    };
    TaskDetailPage.prototype.endTask = function (taskId) {
        var _this = this;
        var token = this.storageService.read('token');
        var taskInfo = {
            'token': token,
            'id': taskId,
            'state': 'done'
        };
        console.log(taskInfo);
        this.taskService.endTask(taskInfo)
            .subscribe(function (data) {
            if (data['succeed']) {
                console.log(data);
                var alert_13 = _this.alertCtrl.create({
                    title: '直播结束成功',
                    subTitle: '直播结束，感谢您的使用！',
                    buttons: [
                        {
                            text: '确认',
                            handler: function () {
                                _this.navCtrl.pop();
                            }
                        }
                    ]
                });
                alert_13.present();
            }
            else {
                if (data['errno'] == 9000) {
                    var alert_14 = _this.alertCtrl.create({
                        title: '直播结束失败',
                        subTitle: '直播结束失败，请登录后重新操作',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    _this.navCtrl.push(_this.loginPage, { flag: 'back', page: null });
                                }
                            }
                        ]
                    });
                    alert_14.present();
                }
                else {
                    var alert_15 = _this.alertCtrl.create({
                        title: '直播结束失败',
                        subTitle: '直播结束失败，请重新尝试操作',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    console.log(data['errno']);
                                }
                            }
                        ]
                    });
                    alert_15.present();
                }
            }
        });
    };
    TaskDetailPage.prototype.observeTask = function (taskRecipientId, taskId) {
        var _this = this;
        var taskInfo = { 'student_id': taskRecipientId };
        this.taskService.getTaskUrl(taskInfo)
            .subscribe(function (data) {
            console.log(data);
            if (data['succeed']) {
                var browser = new InAppBrowser(data['info']['url'], '_blank', "location=true");
            }
            else {
                var alert_16 = _this.alertCtrl.create({
                    title: '请耐心等待',
                    subTitle: '主播正在努力打开花椒，请稍后尝试观看',
                    buttons: [
                        {
                            text: '确认',
                            handler: function () {
                                console.log(data['errno']);
                            }
                        }
                    ]
                });
                alert_16.present();
            }
        });
        var token = this.storageService.read('token');
        var newTaskInfo = {
            'taskId': taskId,
            'token': token,
            'observe': 'true'
        };
        this.taskService.clickTaskTime(newTaskInfo);
    };
    TaskDetailPage.prototype.remainTask = function (taskId) {
        var alert = this.alertCtrl.create({
            title: '开启提醒',
            subTitle: '目前暂未开启，尽请期待',
            buttons: [
                {
                    text: '确认',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    TaskDetailPage.prototype.favor = function (taskId) {
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
                _this.getTask(taskId);
            }
            else {
                if (data['errno'] == 9000) {
                    var alert_17 = _this.alertCtrl.create({
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
                    alert_17.present();
                }
                else {
                    if (data['errno'] == 6004) {
                        var alert_18 = _this.alertCtrl.create({
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
                        alert_18.present();
                    }
                    else {
                        if (data['errno'] == 5012) {
                            var alert_19 = _this.alertCtrl.create({
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
                            alert_19.present();
                        }
                        else {
                            console.log(data['errno']);
                        }
                    }
                }
            }
        });
    };
    TaskDetailPage.prototype.tip = function (taskId, taskName) {
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
                _this.getTask(taskId);
            }
            else {
                if (data['errno'] == 9000) {
                    var alert_20 = _this.alertCtrl.create({
                        title: '请先登录',
                        subTitle: '请登录后重新操作',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    _this.navCtrl.push(_this.loginPage, { flag: 'back', page: null });
                                }
                            }
                        ]
                    });
                    alert_20.present();
                }
                else {
                    if (data['errno'] == 6003) {
                        var alert_21 = _this.alertCtrl.create({
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
                        alert_21.present();
                    }
                    else {
                        if (data['errno'] == 5012) {
                            var alert_22 = _this.alertCtrl.create({
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
                            alert_22.present();
                        }
                        else {
                            console.log(data['errno']);
                        }
                    }
                }
            }
        });
    };
    TaskDetailPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-task-detail',
                    templateUrl: 'task-detail.html',
                    providers: [TaskData, Storage]
                },] },
    ];
    /** @nocollapse */
    TaskDetailPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: AlertController, },
        { type: TaskData, },
        { type: Storage, },
    ];
    return TaskDetailPage;
}());
//# sourceMappingURL=task-detail.js.map