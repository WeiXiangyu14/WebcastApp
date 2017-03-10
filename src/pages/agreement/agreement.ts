import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Agreement page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-agreement',
  templateUrl: 'agreement.html'
})
export class AgreementPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AgreementPage Page');
  }

}
