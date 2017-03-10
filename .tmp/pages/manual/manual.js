import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Manual page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ManualPage = (function () {
    function ManualPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ManualPage.prototype.ionViewDidLoad = function () {
        console.log('Hello ManualPage Page');
    };
    ManualPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-manual',
                    templateUrl: 'manual.html'
                },] },
    ];
    /** @nocollapse */
    ManualPage.ctorParameters = [
        { type: NavController, },
    ];
    return ManualPage;
}());
//# sourceMappingURL=manual.js.map