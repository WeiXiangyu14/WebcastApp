import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Rulebooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rulebooks',
  templateUrl: 'rulebooks.html'
})
export class RulebooksPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RulebooksPage Page');
  }

}
