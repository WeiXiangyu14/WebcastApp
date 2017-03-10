import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Manual page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html'
})
export class ManualPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ManualPage Page');
  }

}
