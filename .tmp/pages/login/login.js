import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../providers/login';
import { Storage } from '../../providers/storage';
// import { emailValidator } from './../../providers/validator'
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, loginService, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.storageService = storageService;
        this.flag = this.navParams.get('flag');
        this.nextPage = this.navParams.get('page');
        this.LoginId = new FormControl("", (Validators.required, Validators.minLength(10), Validators.maxLength(10)));
        this.loginForm = this.formBuilder.group({
            LoginId: this.LoginId,
            LoginPwd: ['', [Validators.required]]
        });
        this.succeed = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginPage Page');
    };
    LoginPage.prototype.login = function (user, _event) {
        var _this = this;
        this.loginService.login({ student_id: user['LoginId'], password: user['LoginPwd'] })
            .subscribe(function (data) {
            _this.succeed = !data['succeed'];
            console.log(data);
            if (!_this.succeed) {
                _this.storageService.write('token', data['token']);
                if (_this.flag == 'next') {
                    _this.navCtrl.insert(0, _this.nextPage);
                    // console.log(this.navCtrl.length());
                    _this.navCtrl.popToRoot();
                }
                else {
                    _this.navCtrl.pop();
                }
            }
        });
    };
    LoginPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-login',
                    templateUrl: 'login.html',
                    providers: [Login, Storage]
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: FormBuilder, },
        { type: Login, },
        { type: Storage, },
    ];
    return LoginPage;
}());
//# sourceMappingURL=login.js.map