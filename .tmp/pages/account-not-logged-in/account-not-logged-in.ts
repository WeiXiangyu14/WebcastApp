import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login'
import { RulebooksPage } from '../rulebooks/rulebooks'
import { HelpPage } from '../help/help'
import { ContactUsPage } from '../contact-us/contact-us'
import { AccountLoggedInPage } from '../account-logged-in/account-logged-in';

/*
  Generated class for the AccountNotLoggedIn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account-not-logged-in',
  templateUrl: 'account-not-logged-in.html'
})
export class AccountNotLoggedInPage {
  selectedItem: any;
  items: Array<{note:string}>;

  loginPage: any = LoginPage;
  accountLoggedInPage: any = AccountLoggedInPage;

  pageIndex: any;

  rulebooksPage: any = RulebooksPage;
  helpPage: any = HelpPage;
  contactUsPage: any = ContactUsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    
    this.items = [];
    this.items.push({note: "规则说明"});
    this.items.push({note: "帮助"});
    this.items.push({note: "关于我们"});

    this.pageIndex = {};
    this.pageIndex["规则说明"] = this.rulebooksPage;
    this.pageIndex["帮助"] = this.helpPage;
    this.pageIndex["关于我们"] = this.contactUsPage;

  }

  ionViewDidLoad() {
    console.log('Hello AccountNotLoggedInPage Page');
  }

  onMessage(){
    
  }

  onLogIn(){
    this.navCtrl.push(this.loginPage, { page: this.accountLoggedInPage, flag: 'next'});
  }

  itemTapped(event, item) {
    this.navCtrl.push(this.pageIndex[item['note']]);
  }

}
