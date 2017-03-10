import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Report } from '../../providers/report';
import { Storage } from '../../providers/storage';
/*
  Generated class for the Report page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ReportPage = (function () {
    function ReportPage(navCtrl, alertCtrl, reportService, storageService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.reportService = reportService;
        this.storageService = storageService;
        this.email = '';
        this.content = '';
        this.error = false;
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        console.log('Hello ReportPage Page');
    };
    ReportPage.prototype.submitReport = function () {
        var _this = this;
        if (this.email == "" || this.content == "") {
            this.error = true;
        }
        else {
            console.log([this.email, this.content]);
            this.error = false;
            var token = this.storageService.read('token');
            if (token == null) {
                token = 'null';
            }
            var info = {
                'token': token,
                'email': this.email,
                'content': this.content
            };
            this.reportService.report(info)
                .subscribe(function (data) {
                if (data['succeed']) {
                    var alert_1 = _this.alertCtrl.create({
                        title: '提交成功',
                        subTitle: '感谢您的举报和反馈，我们会高度重视！',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    _this.navCtrl.pop();
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    alert_1.present();
                }
            });
        }
    };
    ReportPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-report',
                    templateUrl: 'report.html',
                    providers: [Report]
                },] },
    ];
    /** @nocollapse */
    ReportPage.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
        { type: Report, },
        { type: Storage, },
    ];
    return ReportPage;
}());
//# sourceMappingURL=report.js.map