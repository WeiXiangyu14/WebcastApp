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
@Component({
  selector: 'page-account-logged-in',
  templateUrl: 'account-logged-in.html',
  providers: [ Storage, UserData ]
})
export class AccountLoggedInPage {
  accountNotLoggedInPage: any = AccountNotLoggedInPage;

  pageIndex: any;

  rulebooksPage: any = RulebooksPage;
  helpPage: any = HelpPage;
  contactUsPage: any = ContactUsPage;

  personalPage: any = PersonalPage;
  accountPage: any = AccountPage;
  challengePage: any = ChallengePage;
  taskPage: any = TaskPage;
  observePage: any = ObservePage;

  selectedItem: any;
  items: Array<{note:string}>;
  selectedItemPrivacy: any;
  itemsPrivacy: Array<{note:string}>;

  user : {
    name: string,
    title: string,
    introduction: string,
    boardId: string,
    image: string,
    GPS: {
      x: number,
      y: number
    },
    goldCoin: number,
    points: number,
    credit: number
  }

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public navParams: NavParams, 
    public storageService: Storage,
    public userDataService: UserData
    ) {
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

    this.items = []
    this.items.push({note: "规则说明"});
    this.items.push({note: "帮助"});
    this.items.push({note: "关于我们"});

    this.selectedItemPrivacy = navParams.get('item');

    this.itemsPrivacy = []
    this.itemsPrivacy.push({note: "个人主页"});
    this.itemsPrivacy.push({note: "我的账户"});
    this.itemsPrivacy.push({note: "我的挑战"});
    this.itemsPrivacy.push({note: "我的任务"});
    this.itemsPrivacy.push({note: "我的围观"});

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

  ionViewDidLoad() {
    console.log('Hello AccountLoggedInPage Page');
  }

  logout(){
    console.log('logout');
    this.storageService.write('token', 'logout');
    this.navCtrl.setRoot(this.accountNotLoggedInPage);
    console.log(this.navCtrl.length());
    console.log(this.navCtrl.getViews());
    // this.navCtrl.popToRoot();
    // while(this.navCtrl.length() > 1){
      // this.navCtrl.pop();
    // }
  }

  onMessage(){
    
  }

  itemTapped(event, item) {
    if(item['note'] == '个人主页' || item['note'] == '我的账户') {
      this.navCtrl.push(this.pageIndex[item['note']], {user: this.user});
      // console.log(this.user);
    }
    else{
      this.navCtrl.push(this.pageIndex[item['note']]);
    }
  }

  getPersonalInfo(){
    var token = this.storageService.read('token');
    this.userDataService.getPersonalInfo(token)
      .subscribe(
        data => {
          if(data['succeed']){
            this.user = data['info'];
            // console.log(this.user);
          }
          else{
            let alert = this.alertCtrl.create({
              title: '权限不够',
              message: '请重新登陆',
              buttons: [
                {
                  text: '确定',
                  handler: () => {
                    this.logout()
                  }
                }]
              });
            alert.present();
          }
        }
      );
  }

}
