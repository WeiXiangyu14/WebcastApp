import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';

/*
  Generated class for the Fiter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fiter',
  templateUrl: 'fiter.html'
})
export class FiterPage {
  goldCoin: string = 'goldCoin';
  points: string = 'points';
  income: string = 'income';
  payment: string = 'payment';

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello FilerPage Page');
  }

  close(selectedItem) {
    console.log(selectedItem);
    this.viewCtrl.dismiss(selectedItem);
  }

}
