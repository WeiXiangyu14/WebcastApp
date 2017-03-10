import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AccountNotLoggedInPage } from '../account-not-logged-in/account-not-logged-in';
import { RulebooksPage } from '../rulebooks/rulebooks';
import { HelpPage } from '../help/help';
import { ContactUsPage } from '../contact-us/contact-us';
import { PersonalPage } from '../personal/personal';
import { AccountPage } from '../account/account';
import { ChallengePage } from '../challenge/challenge';
import { TaskPage } from '../task/task';
import { ObservePage } from '../observe/observe';
import { Storage } from '../../providers/storage';
import { UserData } from '../../providers/user-data';
/*
  Generated class for the AccountLoggedIn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var AccountLoggedInPage = (function () {
    function AccountLoggedInPage(navCtrl, alertCtrl, navParams, storageService, userDataService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.storageService = storageService;
        this.userDataService = userDataService;
        this.accountNotLoggedInPage = AccountNotLoggedInPage;
        this.rulebooksPage = RulebooksPage;
        this.helpPage = HelpPage;
        this.contactUsPage = ContactUsPage;
        this.personalPage = PersonalPage;
        this.accountPage = AccountPage;
        this.challengePage = ChallengePage;
        this.taskPage = TaskPage;
        this.observePage = ObservePage;
        console.log('hello constructor of AccountLoggedInPage');
        this.user = {
            name: '无名',
            title: '未设置',
            introduction: '未设置',
            boardId: '0',
            image: '0.png',
            GPS: {
                x: 0,
                y: 0
            },
            goldCoin: 0,
            points: 0,
            credit: 0
        };
        this.getPersonalInfo();
        this.selectedItem = navParams.get('item');
        this.items = [];
        this.items.push({ note: "规则说明" });
        this.items.push({ note: "帮助" });
        this.items.push({ note: "关于我们" });
        this.selectedItemPrivacy = navParams.get('item');
        this.itemsPrivacy = [];
        this.itemsPrivacy.push({ note: "个人主页" });
        this.itemsPrivacy.push({ note: "我的账户" });
        this.itemsPrivacy.push({ note: "我的挑战" });
        this.itemsPrivacy.push({ note: "我的任务" });
        this.itemsPrivacy.push({ note: "我的围观" });
        this.pageIndex = {};
        this.pageIndex["规则说明"] = this.rulebooksPage;
        this.pageIndex["帮助"] = this.helpPage;
        this.pageIndex["关于我们"] = this.contactUsPage;
        this.pageIndex["个人主页"] = this.personalPage;
        this.pageIndex["我的账户"] = this.accountPage;
        this.pageIndex["我的挑战"] = this.challengePage;
        this.pageIndex["我的任务"] = this.taskPage;
        this.pageIndex["我的围观"] = this.observePage;
    }
    AccountLoggedInPage.prototype.ionViewDidLoad = function () {
        console.log('Hello AccountLoggedInPage Page');
    };
    AccountLoggedInPage.prototype.logout = function () {
        console.log('logout');
        this.storageService.write('token', 'logout');
        this.navCtrl.setRoot(this.accountNotLoggedInPage);
        console.log(this.navCtrl.length());
        console.log(this.navCtrl.getViews());
        // this.navCtrl.popToRoot();
        // while(this.navCtrl.length() > 1){
        // this.navCtrl.pop();
        // }
    };
    AccountLoggedInPage.prototype.onMessage = function () {
    };
    AccountLoggedInPage.prototype.itemTapped = function (event, item) {
        if (item['note'] == '个人主页' || item['note'] == '我的账户') {
            this.navCtrl.push(this.pageIndex[item['note']], { user: this.user });
        }
        else {
            this.navCtrl.push(this.pageIndex[item['note']]);
        }
    };
    AccountLoggedInPage.prototype.getPersonalInfo = function () {
        var _this = this;
        var token = this.storageService.read('token');
        this.userDataService.getPersonalInfo(token)
            .subscribe(function (data) {
            if (data['succeed']) {
                _this.user = data['info'];
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: '权限不够',
                    message: '请重新登陆',
                    buttons: [
                        {
                            text: '确定',
                            handler: function () {
                                _this.logout();
                            }
                        }]
                });
                alert_1.present();
            }
        });
    };
    AccountLoggedInPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-account-logged-in',
                    templateUrl: 'account-logged-in.html',
                    providers: [Storage, UserData]
                },] },
    ];
    /** @nocollapse */
    AccountLoggedInPage.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
        { type: NavParams, },
        { type: Storage, },
        { type: UserData, },
    ];
    return AccountLoggedInPage;
}());
//# sourceMappingURL=account-logged-in.js.map