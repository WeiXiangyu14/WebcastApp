import { Component } from '@angular/core';
import { AppConfig } from '../../app/app.config';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { AccountNotLoggedInPage } from '../account-not-logged-in/account-not-logged-in';
import { AccountLoggedInPage } from '../account-logged-in/account-logged-in';
import { Login } from '../../providers/login';
import { Storage } from '../../providers/storage';
import { UserData } from '../../providers/user-data';
export var TabsPage = (function () {
    function TabsPage(loginService, storageService, userDataService) {
        this.loginService = loginService;
        this.storageService = storageService;
        this.userDataService = userDataService;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HomePage;
        this.tab2Root = MapPage;
        this.accountNotLoggedInPage = AccountNotLoggedInPage;
        this.accountLoggedInPage = AccountLoggedInPage;
        console.log('hello tabs');
        this.setTab3Root();
        this.storageService.write('update', 'false');
        // this.tab3Root = this.accountNotLoggedInPage;
        this.getGeolocation();
        this.updateGeolocation();
    }
    TabsPage.prototype.setTab3Root = function () {
        var _this = this;
        var token = this.storageService.read('token');
        if (token == null) {
            token = 'null';
        }
        this.loginService.checkLogin(token)
            .subscribe(function (data) {
            // console.log(data);
            if (data['succeed']) {
                if (data['is_login']) {
                    _this.tab3Root = _this.accountLoggedInPage;
                }
                else {
                    _this.tab3Root = _this.accountNotLoggedInPage;
                }
            }
        });
    };
    TabsPage.prototype.selected = function () {
        console.log('tab3Root');
        this.setTab3Root();
    };
    TabsPage.prototype.updateGeolocation = function () {
        var _this = this;
        setTimeout(function () {
            _this.getGeolocation();
            _this.updateGeolocation();
        }, 60000);
    };
    TabsPage.prototype.getGeolocation = function () {
        var temp_Storage = this.storageService;
        temp_Storage.write('update', 'false');
        var map, geolocation;
        //加载地图，调用浏览器定位服务
        // map = new AMap.Map('container', {
        //   resizeEnable: true
        // });
        map = AppConfig.getMap();
        map.plugin('AMap.Geolocation', function () {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,
                timeout: 10000,
                buttonOffset: new AMap.Pixel(10, 20),
                zoomToAccuracy: true,
                buttonPosition: 'RB'
            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition(function (status, result) {
                if (status == 'complete') {
                    console.log(result);
                    temp_Storage.write('position', result.formattedAddress);
                    temp_Storage.write('lat', result.position.getLat());
                    temp_Storage.write('long', result.position.getLng());
                    temp_Storage.write('update', 'true');
                }
                else {
                    console.log(result);
                }
            });
        });
        this.updatePosition();
    };
    TabsPage.prototype.updatePosition = function () {
        var _this = this;
        var is_update = this.storageService.read('update');
        console.log(is_update);
        if (is_update == 'true') {
            var token = this.storageService.read('token');
            var userInfo = {
                'token': token,
                'longitude': this.storageService.read('long'),
                'latitude': this.storageService.read('lat')
            };
            this.userDataService.updateGeolocation(userInfo)
                .subscribe(function (data) {
                console.log(data);
            });
        }
        else {
            setTimeout(function () {
                //将获得的经纬度信息，放入sessionStorge
                _this.updatePosition();
            }, 1000);
        }
    };
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html',
                    providers: [Login, Storage, UserData]
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [
        { type: Login, },
        { type: Storage, },
        { type: UserData, },
    ];
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map