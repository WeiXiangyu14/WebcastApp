import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
/*
  Generated class for the Fiter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var FiterPage = (function () {
    function FiterPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.goldCoin = 'goldCoin';
        this.points = 'points';
        this.income = 'income';
        this.payment = 'payment';
    }
    FiterPage.prototype.ionViewDidLoad = function () {
        console.log('Hello FilerPage Page');
    };
    FiterPage.prototype.close = function (selectedItem) {
        console.log(selectedItem);
        this.viewCtrl.dismiss(selectedItem);
    };
    FiterPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-fiter',
                    templateUrl: 'fiter.html'
                },] },
    ];
    /** @nocollapse */
    FiterPage.ctorParameters = [
        { type: ViewController, },
    ];
    return FiterPage;
}());
//# sourceMappingURL=fiter.js.map