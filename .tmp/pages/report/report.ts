import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Report } from '../../providers/report'
import { Storage } from '../../providers/storage'

/*
  Generated class for the Report page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
  providers: [ Report ]
})
export class ReportPage {

  email: string = '';
  content: string = '';
  error: boolean = false;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public reportService: Report,
    public storageService: Storage
    ) {}

  ionViewDidLoad() {
    console.log('Hello ReportPage Page');
  }

  submitReport() {
    if(this.email == "" || this.content == ""){
      this.error = true;
    }
    else{
      console.log([this.email, this.content]);
      this.error = false;
      var token = this.storageService.read('token');
      if(token == null) {
        token = 'null';
      }
      var info = {
        'token': token, 
        'email': this.email,
        'content': this.content
      }
      this.reportService.report(info)
      .subscribe(
        data => {
          if(data['succeed']){
            let alert = this.alertCtrl.create({
              title: '提交成功',
              subTitle: '感谢您的举报和反馈，我们会高度重视！',
              buttons: [
                {
                  text: '确认',
                  handler: ()=>{
                    this.navCtrl.pop();
                  }
                }
              ],
              enableBackdropDismiss: false
            });
            alert.present();
          }
        }
      );
    }
  }

}
