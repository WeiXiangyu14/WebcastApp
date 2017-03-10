import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera, Transfer } from 'ionic-native';
import { LoginPage } from '../login/login';
import { Storage } from '../../providers/storage';
import { UserData } from '../../providers/user-data';
/*
  Generated class for the Personal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var PersonalPage = (function () {
    function PersonalPage(navCtrl, navParams, actionSheetCtrl, alertCtrl, storageService, userDataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.storageService = storageService;
        this.userDataService = userDataService;
        this.loginPage = LoginPage;
        this.modifyInfo = true;
        this.userImage = null;
        // console.log(this.navParams.get('user'));
        this.userReal = this.navParams.get('user');
        this.user = {
            image: null,
            name: null,
            boardId: null,
            title: null,
            introduction: null
        };
        this.deepCopyUser(this.user, this.userReal);
        console.log(this.user);
    }
    PersonalPage.prototype.ionViewDidLoad = function () {
        console.log('Hello PersonalPage Page');
    };
    PersonalPage.prototype.deepCopyUser = function (target, source) {
        target.image = source.image;
        target.name = source.name;
        target.boardId = source.boardId;
        target.title = source.title;
        target.introduction = source.introduction;
    };
    PersonalPage.prototype.changeImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '拍照',
                    handler: function () {
                        console.log('Camera clicked');
                        var options = {
                            // Some common settings are 20, 50, and 100
                            quality: 50,
                            destinationType: Camera.DestinationType.FILE_URI,
                            // In this app, dynamically set the picture source, Camera or photo gallery
                            encodingType: Camera.EncodingType.JPEG,
                            mediaType: Camera.MediaType.PICTURE,
                            saveToPhotoAlbum: true,
                            sourceType: Camera.PictureSourceType.CAMERA,
                            correctOrientation: true //Corrects Android orientation quirks
                        };
                        /**
                          * imageData就是照片的路径，关于这个imageData还有一些细微的用法，可以参考官方的文档。
                        */
                        Camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64:
                            var base64Image = imageData;
                            _this.userImage = base64Image; //给全局的文件路径赋值。
                            // this.user.image = 'user1.jpg';
                            // alert(this.userImage);
                            _this.user.image = _this.userImage;
                            _this.modifyInfo = false;
                            /*  this.zone.run(() => this.image = base64Image);*/
                        }, function (err) {
                            // Handle error，出错后，在此打印出错的信息。
                            alert(err.toString());
                        });
                    }
                },
                {
                    text: '从相册中选择',
                    handler: function () {
                        console.log('Photo clicked');
                        var options = {
                            // Some common settings are 20, 50, and 100
                            quality: 50,
                            destinationType: Camera.DestinationType.FILE_URI,
                            // In this app, dynamically set the picture source, Camera or photo gallery
                            sourceType: 0,
                            encodingType: Camera.EncodingType.JPEG,
                            mediaType: Camera.MediaType.PICTURE,
                            allowEdit: true,
                            correctOrientation: true //Corrects Android orientation quirks
                        };
                        Camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64:
                            var base64Image = imageData;
                            _this.userImage = base64Image;
                            // this.profilePicture=base64Image;
                            // alert(base64Image);
                            _this.user.image = _this.userImage;
                            _this.modifyInfo = false;
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PersonalPage.prototype.changeBoardId = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '我的花椒直播ID',
            inputs: [
                {
                    name: 'boardId',
                    placeholder: '不可为空',
                    value: this.user['boardId']
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        _this.user['boardId'] = data.boardId;
                        _this.modifyInfo = false;
                    }
                }
            ]
        });
        alert.present();
    };
    PersonalPage.prototype.changeTitle = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '我的头衔',
            inputs: [
                {
                    name: 'title',
                    placeholder: '不可为空',
                    value: this.user['title']
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        _this.user['title'] = data.title;
                        _this.modifyInfo = false;
                    }
                }
            ]
        });
        alert.present();
    };
    PersonalPage.prototype.changeIntroduction = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '我擅长/喜欢直播分享的内容',
            inputs: [
                {
                    name: 'introduction',
                    placeholder: '不可为空',
                    value: this.user['introduction']
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        _this.user['introduction'] = data.introduction;
                        _this.modifyInfo = false;
                    }
                }
            ]
        });
        alert.present();
    };
    PersonalPage.prototype.saveInfo = function () {
        if (this.userImage == null) {
            this.saveModified();
        }
        else {
            this.upload();
        }
    };
    PersonalPage.prototype.saveModified = function () {
        var _this = this;
        var token = this.storageService.read('token');
        var userInfo = {
            'token': token,
            'title': this.user['title'],
            'boardId': this.user['boardId'],
            'introduction': this.user['introduction'],
            'image': this.user['image']
        };
        this.userDataService.updatePersonalInfo(userInfo)
            .subscribe(function (data) {
            console.log(data);
            if (data['succeed']) {
                _this.user = data['info'];
                var alert_1 = _this.alertCtrl.create({
                    title: '保存信息成功',
                    subTitle: '保存信息成功，感谢您的使用',
                    buttons: [
                        {
                            text: '确认',
                            handler: function () {
                                console.log(data['errno']);
                                _this.modifyInfo = true;
                                _this.deepCopyUser(_this.userReal, _this.user);
                            }
                        }
                    ],
                    enableBackdropDismiss: false
                });
                alert_1.present();
            }
            else {
                if (data['errno'] == 9000) {
                    var alert_2 = _this.alertCtrl.create({
                        title: '保存信息失败',
                        subTitle: '保存信息失败，请登录后重新领取',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    _this.navCtrl.push(_this.loginPage, { flag: 'back', page: null });
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    alert_2.present();
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: '保存信息失败',
                        subTitle: '保存信息失败，请重新尝试保存',
                        buttons: [
                            {
                                text: '确认',
                                handler: function () {
                                    console.log(data['errno']);
                                }
                            }
                        ]
                    });
                    alert_3.present();
                }
            }
        });
    };
    PersonalPage.prototype.upload = function () {
        var _this = this;
        var fileTransfer = new Transfer();
        var options;
        console.log(this.userImage);
        console.log(new Date().getTime());
        options = {
            fileKey: 'smfile',
            fileName: '0.png',
            headers: {},
        };
        fileTransfer.upload(this.userImage, 'https://sm.ms/api/upload', options)
            .then(function (data) {
            // success
            console.log('success');
            var response = JSON.parse(data['response']);
            _this.user['image'] = response['data']['url'];
            _this.saveModified();
        }, function (err) {
            // error
            console.log('errpr');
            console.log(err);
        });
    };
    PersonalPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-personal',
                    templateUrl: 'personal.html',
                    providers: [Storage, UserData]
                },] },
    ];
    /** @nocollapse */
    PersonalPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: ActionSheetController, },
        { type: AlertController, },
        { type: Storage, },
        { type: UserData, },
    ];
    return PersonalPage;
}());
//# sourceMappingURL=personal.js.map