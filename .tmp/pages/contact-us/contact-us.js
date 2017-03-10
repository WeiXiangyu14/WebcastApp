import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the ContactUs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ContactUsPage = (function () {
    function ContactUsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('Hello ContactUsPage Page');
    };
    ContactUsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-contact-us',
                    templateUrl: 'contact-us.html'
                },] },
    ];
    /** @nocollapse */
    ContactUsPage.ctorParameters = [
        { type: NavController, },
    ];
    return ContactUsPage;
}());
//# sourceMappingURL=contact-us.js.map