import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { ReportPage } from '../report/report';
import { UserData } from '../../providers/user-data';
import { Storage } from '../../providers/storage';
export var AccountPage = (function () {
    function AccountPage(navCtrl, alertCtrl, storageService, userDataService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.storageService = storageService;
        this.userDataService = userDataService;
        this.historyPage = HistoryPage;
        this.reportPage = ReportPage;
        this.myWallet = {
            'todayGoldCoin': 0,
            'totalGoldCoin': 0,
            'todayPoint': 0,
            'totalPoint': 0
        };
        this.getMyWallet();
    }
    AccountPage.prototype.getMyWallet = function () {
        var _this = this;
        console.log('wallet');
        var token = this.storageService.read('token');
        var userInfo = {
            'token': token,
        };
        this.userDataService.getWallet(userInfo)
            .subscribe(function (data) {
            if (data['succeed']) {
                console.log(data);
                _this.myWallet = data['info'];
            }
        });
    };
    AccountPage.prototype.recharge = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '万分抱歉',
            message: '测试阶段不支持现金充值，如果您希望虚拟充值，请联系我们并留言“我要充值”，我们将在后台为您操作。',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '联系我们',
                    handler: function () {
                        console.log('Contact us clicked');
                        _this.navCtrl.push(_this.reportPage);
                    }
                }
            ]
        });
        alert.present();
    };
    AccountPage.prototype.history = function () {
        this.navCtrl.push(this.historyPage);
    };
    AccountPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-account',
                    templateUrl: 'account.html',
                    providers: [UserData, Storage]
                },] },
    ];
    /** @nocollapse */
    AccountPage.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
        { type: Storage, },
        { type: UserData, },
    ];
    return AccountPage;
}());
//# sourceMappingURL=account.js.map