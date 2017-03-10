import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RulebooksPage } from '../rulebooks/rulebooks';
import { HelpPage } from '../help/help';
import { ContactUsPage } from '../contact-us/contact-us';
import { AccountLoggedInPage } from '../account-logged-in/account-logged-in';
/*
  Generated class for the AccountNotLoggedIn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var AccountNotLoggedInPage = (function () {
    function AccountNotLoggedInPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginPage = LoginPage;
        this.accountLoggedInPage = AccountLoggedInPage;
        this.rulebooksPage = RulebooksPage;
        this.helpPage = HelpPage;
        this.contactUsPage = ContactUsPage;
        this.selectedItem = navParams.get('item');
        this.items = [];
        this.items.push({ note: "规则说明" });
        this.items.push({ note: "帮助" });
        this.items.push({ note: "关于我们" });
        this.pageIndex = {};
        this.pageIndex["规则说明"] = this.rulebooksPage;
        this.pageIndex["帮助"] = this.helpPage;
        this.pageIndex["关于我们"] = this.contactUsPage;
    }
    AccountNotLoggedInPage.prototype.ionViewDidLoad = function () {
        console.log('Hello AccountNotLoggedInPage Page');
    };
    AccountNotLoggedInPage.prototype.onMessage = function () {
    };
    AccountNotLoggedInPage.prototype.onLogIn = function () {
        this.navCtrl.push(this.loginPage, { page: this.accountLoggedInPage, flag: 'next' });
    };
    AccountNotLoggedInPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(this.pageIndex[item['note']]);
    };
    AccountNotLoggedInPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-account-not-logged-in',
                    templateUrl: 'account-not-logged-in.html'
                },] },
    ];
    /** @nocollapse */
    AccountNotLoggedInPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return AccountNotLoggedInPage;
}());
//# sourceMappingURL=account-not-logged-in.js.map