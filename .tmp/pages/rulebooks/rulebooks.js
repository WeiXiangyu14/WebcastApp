import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Rulebooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var RulebooksPage = (function () {
    function RulebooksPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RulebooksPage.prototype.ionViewDidLoad = function () {
        console.log('Hello RulebooksPage Page');
    };
    RulebooksPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-rulebooks',
                    templateUrl: 'rulebooks.html'
                },] },
    ];
    /** @nocollapse */
    RulebooksPage.ctorParameters = [
        { type: NavController, },
    ];
    return RulebooksPage;
}());
//# sourceMappingURL=rulebooks.js.map