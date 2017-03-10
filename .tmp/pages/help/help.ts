import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AgreementPage} from '../agreement/agreement';
import { ManualPage } from '../manual/manual';
import { ReportPage } from '../report/report';


/*
  Generated class for the Help page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {
  agreement: string = 'agreement';
  manual: string = 'manual';
  report: string = 'report';

  agreementPage: any = AgreementPage;
  manualPage: any = ManualPage;
  reportPage: any = ReportPage;

  pageIndex: any;

  constructor(public navCtrl: NavController) {
    this.pageIndex = {};
    this.pageIndex[this.agreement] = this.agreementPage;
    this.pageIndex[this.manual] = this.manualPage;
    this.pageIndex[this.report] = this.reportPage;
  }

  ionViewDidLoad() {
    console.log('Hello HelpPage Page');
  }

  itemTapped(selectedItem){
    this.navCtrl.push(this.pageIndex[selectedItem]);
  }

}
