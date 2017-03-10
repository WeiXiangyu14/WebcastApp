import { Component } from '@angular/core';
import { PopoverController, NavController } from 'ionic-angular';

import { FiterPage } from '../fiter/fiter'

import { UserData } from '../../providers/user-data'
import { Storage } from '../../providers/storage'

/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  providers: [ UserData, Storage ]
})
export class HistoryPage {

  historyRecords: Array <History>;

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public userDataService: UserData,
    public storageService: Storage
    ) {
      this.showAll();
    }

  ionViewDidLoad() {
    console.log('Hello HistoryPage Page');
  }

  fiter(ev) {
    let popover = this.popoverCtrl.create(FiterPage);
    popover.present({
      ev: ev
    });
    popover.onDidDismiss(data => {
        console.log("popover dismissed");
        if(data == null){
          console.log("No item is selected");
        }
        else{
          if(data == 'goldCoin'){
            this.showGoldCoin();
          }
          else{
            if(data == 'points'){
              this.showPoints();
            }
            else{
              if(data == 'income'){
                this.showIncome();
              }
              else{
                this.showPayment();
              }
            }
          }
          console.log("Selected Item is " + data);
        }
    });
  }

  showGoldCoin() {
    console.log('goldCoin');
    var condition = {'pointOrGoldCoin': 'goldCoin'};
    this.getHistory(condition);
  }

  showPoints() {
    console.log('points');
    var condition = {'pointOrGoldCoin': 'point'};
    this.getHistory(condition);
  }

  showIncome() {
    console.log('income');
    var condition = {'number': {'$gt': 0}};
    this.getHistory(condition);
  }

  showPayment() {
    console.log('payment');
    var condition = {'number': {'$lt': 0}};
    this.getHistory(condition);
  }

  showAll() {
    console.log('all');
    var condition = {};
    this.getHistory(condition);
  }

  getHistory(condition){
    var token = this.storageService.read('token');
    var userInfo = {
      'token': token,
      'condition': condition
    }
    this.userDataService.getWalletHistory(userInfo)
    .subscribe(
      data => {
        console.log(data);
        if(data['succeed']){
          this.historyRecords = data['info'].reverse();
          for(var i = 0; i < this.historyRecords.length; i++){
            if(this.historyRecords[i].type == 'challenge'){
              this.historyRecords[i].type = '我的挑战';
            }
            else{
              if(this.historyRecords[i].type == 'task'){
                this.historyRecords[i].type = '我的任务';
              }
              else{
                this.historyRecords[i].type = '我的围观';
              }
            }
            if(this.historyRecords[i].subType == 'submit'){
              this.historyRecords[i].subType = '发布任务';
            }
            else{
              if(this.historyRecords[i].subType == 'tip'){
                this.historyRecords[i].subType = '打赏任务';
              }
              else{
                if(this.historyRecords[i].subType == 'cancel'){
                  this.historyRecords[i].subType = '任务取消';
                }
                else{
                  if(this.historyRecords[i].subType == 'timeout'){
                    this.historyRecords[i].subType = '任务过期';
                  }
                  else{
                    if(this.historyRecords[i].subType == 'succeed'){
                      this.historyRecords[i].subType = '任务成功';
                    }
                    else{
                      this.historyRecords[i].subType = '任务失败';
                    }
                  }
                }
              }
            }
            this.historyRecords[i].modifyNumber = this.historyRecords[i].number.toString();
            if(this.historyRecords[i].number > 0){
              this.historyRecords[i].modifyNumber = '+' + this.historyRecords[i].modifyNumber;
            }
            if(this.historyRecords[i].pointOrGoldCoin == 'point'){
              this.historyRecords[i].historyType = 0;
            }
            else{
              this.historyRecords[i].historyType = 1;
            }
          }
        }
      }
    );
  }

}

export interface History{
  number: number,
  modifyNumber: string,
  taskId: number,
  taskName: string,
  type: string,
  subType: string,
  time: string,
  pointOrGoldCoin: string,
  historyType: number
};
