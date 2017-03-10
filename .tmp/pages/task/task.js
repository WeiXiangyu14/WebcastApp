import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskDetailPage } from '../task-detail/task-detail';
import { TaskData } from '../../providers/task-data';
import { Storage } from '../../providers/storage';
/*
  Generated class for the Task page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var TaskPage = (function () {
    function TaskPage(navCtrl, taskService, storageService) {
        this.navCtrl = navCtrl;
        this.taskService = taskService;
        this.storageService = storageService;
        this.taskDetailPage = TaskDetailPage;
        this.getTaskTask();
    }
    TaskPage.prototype.ionViewDidLoad = function () {
        console.log('Hello TaskPage Page');
    };
    TaskPage.prototype.getTaskTask = function () {
        var _this = this;
        var token = this.storageService.read('token');
        var taskInfo = {
            'token': token,
            'my_task': 'task'
        };
        this.taskService.getMyTasks(taskInfo)
            .subscribe(function (data) {
            if (data['succeed']) {
                _this.tasks = data['info'];
                for (var i = 0; i < _this.tasks.length; i++) {
                    switch (_this.tasks[i].state) {
                        case 'doing':
                            _this.tasks[i].taskTypeNumber = 0;
                            break;
                        case 'toDo':
                            _this.tasks[i].taskTypeNumber = 1;
                            break;
                        case 'waiting':
                            _this.tasks[i].taskTypeNumber = 2;
                            break;
                        case 'judge':
                            if (_this.tasks[i]['hasJudge'] == 1) {
                                _this.tasks[i].taskTypeNumber = 31;
                            }
                            else {
                                if (_this.tasks[i]['hasJudge'] == 2) {
                                    _this.tasks[i].taskTypeNumber = 32;
                                }
                                else {
                                    _this.tasks[i].taskTypeNumber = 33;
                                }
                            }
                            break;
                        case 'done':
                            if (_this.tasks[i].result == 'succeed') {
                                _this.tasks[i].taskTypeNumber = 41;
                            }
                            else {
                                _this.tasks[i].taskTypeNumber = 42;
                            }
                            break;
                        case 'timeout':
                            _this.tasks[i].taskTypeNumber = 5;
                            break;
                        default:
                            break;
                    }
                }
            }
        });
    };
    TaskPage.prototype.onTaskClick = function (task, taskType) {
        console.log(task);
        this.clickTaskTime(task.taskId);
        this.navCtrl.push(this.taskDetailPage, { 'task': task, 'taskType': taskType });
    };
    TaskPage.prototype.ionViewWillEnter = function () {
        console.log('page enter');
        this.getTaskTask();
    };
    TaskPage.prototype.clickTaskTime = function (taskId) {
        var token = this.storageService.read('token');
        var taskInfo = {
            'token': token,
            'taskId': taskId,
            'observe': 'false'
        };
        this.taskService.clickTaskTime(taskInfo);
    };
    TaskPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-task',
                    templateUrl: 'task.html',
                    providers: [TaskData, Storage]
                },] },
    ];
    /** @nocollapse */
    TaskPage.ctorParameters = [
        { type: NavController, },
        { type: TaskData, },
        { type: Storage, },
    ];
    return TaskPage;
}());
//# sourceMappingURL=task.js.map