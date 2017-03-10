import { Component } from '@angular/core';
import { PopoverController, NavController } from 'ionic-angular';
import { FiterPage } from '../fiter/fiter';
import { UserData } from '../../providers/user-data';
import { Storage } from '../../providers/storage';
/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var HistoryPage = (function () {
    function HistoryPage(navCtrl, popoverCtrl, userDataService, storageService) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.userDataService = userDataService;
        this.storageService = storageService;
        this.showAll();
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('Hello HistoryPage Page');
    };
    HistoryPage.prototype.fiter = function (ev) {
        var _this = this;
        var popover = this.popoverCtrl.create(FiterPage);
        popover.present({
            ev: ev
        });
        popover.onDidDismiss(function (data) {
            console.log("popover dismissed");
            if (data == null) {
                console.log("No item is selected");
            }
            else {
                if (data == 'goldCoin') {
                    _this.showGoldCoin();
                }
                else {
                    if (data == 'points') {
                        _this.showPoints();
                    }
                    else {
                        if (data == 'income') {
                            _this.showIncome();
                        }
                        else {
                            _this.showPayment();
                        }
                    }
                }
                console.log("Selected Item is " + data);
            }
        });
    };
    HistoryPage.prototype.showGoldCoin = function () {
        console.log('goldCoin');
        var condition = { 'pointOrGoldCoin': 'goldCoin' };
        this.getHistory(condition);
    };
    HistoryPage.prototype.showPoints = function () {
        console.log('points');
        var condition = { 'pointOrGoldCoin': 'point' };
        this.getHistory(condition);
    };
    HistoryPage.prototype.showIncome = function () {
        console.log('income');
        var condition = { 'number': { '$gt': 0 } };
        this.getHistory(condition);
    };
    HistoryPage.prototype.showPayment = function () {
        console.log('payment');
        var condition = { 'number': { '$lt': 0 } };
        this.getHistory(condition);
    };
    HistoryPage.prototype.showAll = function () {
        console.log('all');
        var condition = {};
        this.getHistory(condition);
    };
    HistoryPage.prototype.getHistory = function (condition) {
        var _this = this;
        var token = this.storageService.read('token');
        var userInfo = {
            'token': token,
            'condition': condition
        };
        this.userDataService.getWalletHistory(userInfo)
            .subscribe(function (data) {
            console.log(data);
            if (data['succeed']) {
                _this.historyRecords = data['info'].reverse();
                for (var i = 0; i < _this.historyRecords.length; i++) {
                    if (_this.historyRecords[i].type == 'challenge') {
                        _this.historyRecords[i].type = '我的挑战';
                    }
                    else {
                        if (_this.historyRecords[i].type == 'task') {
                            _this.historyRecords[i].type = '我的任务';
                        }
                        else {
                            _this.historyRecords[i].type = '我的围观';
                        }
                    }
                    if (_this.historyRecords[i].subType == 'submit') {
                        _this.historyRecords[i].subType = '发布任务';
                    }
                    else {
                        if (_this.historyRecords[i].subType == 'tip') {
                            _this.historyRecords[i].subType = '打赏任务';
                        }
                        else {
                            if (_this.historyRecords[i].subType == 'cancel') {
                                _this.historyRecords[i].subType = '任务取消';
                            }
                            else {
                                if (_this.historyRecords[i].subType == 'timeout') {
                                    _this.historyRecords[i].subType = '任务过期';
                                }
                                else {
                                    if (_this.historyRecords[i].subType == 'succeed') {
                                        _this.historyRecords[i].subType = '任务成功';
                                    }
                                    else {
                                        _this.historyRecords[i].subType = '任务失败';
                                    }
                                }
                            }
                        }
                    }
                    _this.historyRecords[i].modifyNumber = _this.historyRecords[i].number.toString();
                    if (_this.historyRecords[i].number > 0) {
                        _this.historyRecords[i].modifyNumber = '+' + _this.historyRecords[i].modifyNumber;
                    }
                    if (_this.historyRecords[i].pointOrGoldCoin == 'point') {
                        _this.historyRecords[i].historyType = 0;
                    }
                    else {
                        _this.historyRecords[i].historyType = 1;
                    }
                }
            }
        });
    };
    HistoryPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-history',
                    templateUrl: 'history.html',
                    providers: [UserData, Storage]
                },] },
    ];
    /** @nocollapse */
    HistoryPage.ctorParameters = [
        { type: NavController, },
        { type: PopoverController, },
        { type: UserData, },
        { type: Storage, },
    ];
    return HistoryPage;
}());
;
//# sourceMappingURL=history.js.map