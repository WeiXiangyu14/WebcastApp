import { Component } from '@angular/core';
import { Geolocation } from 'ionic-native';

import { AppConfig } from '../../app/app.config';

import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { AccountNotLoggedInPage } from '../account-not-logged-in/account-not-logged-in';
import { AccountLoggedInPage } from '../account-logged-in/account-logged-in';

import { Login } from '../../providers/login';
import { Storage } from '../../providers/storage';
import { UserData } from '../../providers/user-data';


@Component({
  templateUrl: 'tabs.html',
  providers: [ Login, Storage, UserData ]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MapPage;
  tab3Root: any;
  accountNotLoggedInPage: any = AccountNotLoggedInPage;
  accountLoggedInPage: any = AccountLoggedInPage;

  constructor(
    public loginService: Login,
    public storageService: Storage,
    public userDataService: UserData
  ) {
    console.log('hello tabs');
    this.setTab3Root();
    this.storageService.write('update', 'false');
    // this.tab3Root = this.accountNotLoggedInPage;
    this.getGeolocation();
    this.updateGeolocation();
  }

  setTab3Root(){
    var token = this.storageService.read('token');
    if(token == null) {
      token = 'null';
    }
    this.loginService.checkLogin(token)
      .subscribe(
        data => {
          // console.log(data);
          if(data['succeed']){
            if(data['is_login']){
              this.tab3Root = this.accountLoggedInPage;
            }
            else{
              this.tab3Root = this.accountNotLoggedInPage;
            }
          }
        }
      )
  }

  selected(){
    console.log('tab3Root');
    this.setTab3Root();
  }

  updateGeolocation(){
    setTimeout(() => {
      this.getGeolocation();
      this.updateGeolocation();
    }, 60000);
  }

  getGeolocation(){
    var temp_Storage = this.storageService;
    temp_Storage.write('update', 'false');
    var map, geolocation;
    //加载地图，调用浏览器定位服务
    // map = new AMap.Map('container', {
    //   resizeEnable: true
    // });
    map = AppConfig.getMap();
    map.plugin('AMap.Geolocation', function() {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition:'RB'
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition(function(status, result){
        if(status == 'complete'){
          console.log(result);
          temp_Storage.write('position', result.formattedAddress);
          temp_Storage.write('lat', result.position.getLat());
          temp_Storage.write('long', result.position.getLng());
          temp_Storage.write('update', 'true');
        }
        else{
          console.log(result);
        }
      });
    });
    this.updatePosition();
  }

  updatePosition(){
    var is_update = this.storageService.read('update');
    console.log(is_update);
    if(is_update == 'true'){
      var token = this.storageService.read('token');
      var userInfo = {
        'token': token,
        'longitude': this.storageService.read('long'),
        'latitude': this.storageService.read('lat')
      };
      this.userDataService.updateGeolocation(userInfo)
      .subscribe(
        data => {
          console.log(data);
        }
      );
    }else{
      setTimeout(() => {
        //将获得的经纬度信息，放入sessionStorge
        this.updatePosition();
      },1000)
    }
  }

}
