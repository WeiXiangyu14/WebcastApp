import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Agreement page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var AgreementPage = (function () {
    function AgreementPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AgreementPage.prototype.ionViewDidLoad = function () {
        console.log('Hello AgreementPage Page');
    };
    AgreementPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-agreement',
                    templateUrl: 'agreement.html'
                },] },
    ];
    /** @nocollapse */
    AgreementPage.ctorParameters = [
        { type: NavController, },
    ];
    return AgreementPage;
}());
//# sourceMappingURL=agreement.js.map