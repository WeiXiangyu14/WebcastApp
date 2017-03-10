import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgreementPage } from '../agreement/agreement';
import { ManualPage } from '../manual/manual';
import { ReportPage } from '../report/report';
/*
  Generated class for the Help page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var HelpPage = (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.agreement = 'agreement';
        this.manual = 'manual';
        this.report = 'report';
        this.agreementPage = AgreementPage;
        this.manualPage = ManualPage;
        this.reportPage = ReportPage;
        this.pageIndex = {};
        this.pageIndex[this.agreement] = this.agreementPage;
        this.pageIndex[this.manual] = this.manualPage;
        this.pageIndex[this.report] = this.reportPage;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('Hello HelpPage Page');
    };
    HelpPage.prototype.itemTapped = function (selectedItem) {
        this.navCtrl.push(this.pageIndex[selectedItem]);
    };
    HelpPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-help',
                    templateUrl: 'help.html'
                },] },
    ];
    /** @nocollapse */
    HelpPage.ctorParameters = [
        { type: NavController, },
    ];
    return HelpPage;
}());
//# sourceMappingURL=help.js.map