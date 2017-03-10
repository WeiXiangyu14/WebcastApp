import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { HistoryPage } from '../history/history';
import { ReportPage } from '../report/report';

import { UserData } from '../../providers/user-data'
import { Storage } from '../../providers/storage'


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  providers: [ UserData, Storage ]
})
export class AccountPage {
  
  historyPage: any = HistoryPage;
  reportPage: any = ReportPage;
  myWallet = {
    'todayGoldCoin': 0,
    'totalGoldCoin': 0,
    'todayPoint': 0,
    'totalPoint': 0
  }

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storageService: Storage,
    public userDataService: UserData
    ) {
      this.getMyWallet();
  }

  getMyWallet(){
    console.log('wallet');
    var token = this.storageService.read('token');
    var userInfo = {
      'token': token,
    };
    this.userDataService.getWallet(userInfo)
    .subscribe(
      data=>{
        if(data['succeed']){
          console.log(data);
          this.myWallet = data['info']
        }
      }
    );
  }

  recharge() {
    let alert = this.alertCtrl.create({
      title: '万分抱歉',
      message: '测试阶段不支持现金充值，如果您希望虚拟充值，请联系我们并留言“我要充值”，我们将在后台为您操作。',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '联系我们',
          handler: () => {
            console.log('Contact us clicked');
            this.navCtrl.push(this.reportPage);
          }
        }
      ]
    });
    alert.present();
  }

  history() {
    this.navCtrl.push(this.historyPage);
  }

}
