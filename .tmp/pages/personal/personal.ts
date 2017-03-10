import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera, Transfer } from 'ionic-native';

import { LoginPage } from '../login/login'

import { Storage } from '../../providers/storage';
import { UserData } from '../../providers/user-data';

/*
  Generated class for the Personal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
  providers: [ Storage, UserData ]
})
export class PersonalPage {

  user: UserInfo;
  userReal: UserInfo;
  loginPage: any = LoginPage;
  modifyInfo: boolean = true;
  userImage: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController, 
    public storageService: Storage,
    public userDataService: UserData
    ) {
      // console.log(this.navParams.get('user'));
      this.userReal = this.navParams.get('user');
      this.user = {
        image: null,
        name: null,
        boardId: null,
        title: null,
        introduction: null
      }
      this.deepCopyUser(this.user, this.userReal);
      console.log(this.user);
    }

  ionViewDidLoad() {
    console.log('Hello PersonalPage Page');
  }

  deepCopyUser(target: UserInfo, source: UserInfo) {
    target.image = source.image;
    target.name = source.name;
    target.boardId = source.boardId;
    target.title = source.title;
    target.introduction = source.introduction;
  }

  changeImage() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '拍照',
          handler: () => {
            console.log('Camera clicked');
            var options = {
              // Some common settings are 20, 50, and 100
              quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              
              encodingType: Camera.EncodingType.JPEG,
              mediaType: Camera.MediaType.PICTURE,
              saveToPhotoAlbum:true,
              sourceType:Camera.PictureSourceType.CAMERA,//拍照时，此参数必须有，否则拍照之后报错，照片不能保存
              
              correctOrientation: true  //Corrects Android orientation quirks
            }
            /**
              * imageData就是照片的路径，关于这个imageData还有一些细微的用法，可以参考官方的文档。
            */
            Camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              let base64Image =  imageData;
              this.userImage = base64Image;//给全局的文件路径赋值。
              // this.user.image = 'user1.jpg';
              // alert(this.userImage);
              this.user.image = this.userImage;
              this.modifyInfo = false;

              /*  this.zone.run(() => this.image = base64Image);*/
            }, (err) => {
              // Handle error，出错后，在此打印出错的信息。
              alert( err.toString());
            });
          }
        },
        {
          text: '从相册中选择',
          handler: () => {
            console.log('Photo clicked');
            var options = {
              // Some common settings are 20, 50, and 100
              quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: 0,//0对应的值为PHOTOLIBRARY ，即打开相册
              encodingType: Camera.EncodingType.JPEG,
              mediaType: Camera.MediaType.PICTURE,
              allowEdit: true,
              correctOrientation: true  //Corrects Android orientation quirks
            }
            Camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              let base64Image = imageData;
              this.userImage = base64Image;
              // this.profilePicture=base64Image;
              // alert(base64Image);
              this.user.image = this.userImage;
              this.modifyInfo = false;
            }, (err) => {
              // Handle error
            });
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  changeBoardId(){
    let alert = this.alertCtrl.create({
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
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            this.user['boardId'] = data.boardId;
            this.modifyInfo = false;
          }
        }
      ]
    });
    alert.present();
  }

  changeTitle(){
    let alert = this.alertCtrl.create({
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
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            this.user['title'] = data.title;
            this.modifyInfo = false;
          }
        }
      ]
    });
    alert.present();
  }

  changeIntroduction(){
    let alert = this.alertCtrl.create({
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
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            this.user['introduction'] = data.introduction;
            this.modifyInfo = false;
          }
        }
      ]
    });
    alert.present();
  }

  saveInfo(){
    if(this.userImage == null){
      this.saveModified();
    }
    else{
      this.upload();
    }
  }

  saveModified(){
    var token = this.storageService.read('token');
    var userInfo = {
      'token': token,
      'title': this.user['title'],
      'boardId': this.user['boardId'],
      'introduction': this.user['introduction'],
      'image': this.user['image']
    }
    this.userDataService.updatePersonalInfo(userInfo)
    .subscribe(
      data=>{
        console.log(data);
        if(data['succeed']){
          this.user = data['info'];
          let alert = this.alertCtrl.create({
            title: '保存信息成功',
            subTitle: '保存信息成功，感谢您的使用',
            buttons: [
              {
                text: '确认',
                handler: ()=>{
                  console.log(data['errno']);
                  this.modifyInfo = true;
                  this.deepCopyUser(this.userReal, this.user);
                }
              }
            ],
            enableBackdropDismiss: false
          });
          alert.present();
        }
        else{
          if(data['errno'] == 9000){
            let alert = this.alertCtrl.create({
              title: '保存信息失败',
              subTitle: '保存信息失败，请登录后重新领取',
              buttons: [
                {
                  text: '确认',
                  handler: ()=>{
                    this.navCtrl.push(this.loginPage, {flag: 'back', page: null});
                  }
                }
              ],
              enableBackdropDismiss: false
            });
            alert.present();
          }
          else{
            let alert = this.alertCtrl.create({
              title: '保存信息失败',
              subTitle: '保存信息失败，请重新尝试保存',
              buttons: [
                {
                  text: '确认',
                  handler: ()=>{
                    console.log(data['errno']);
                  }
                }
              ]
            });
            alert.present();
          }
        }
      }
    )
  }

  upload() {
    const fileTransfer = new Transfer();
    var options: any;
    console.log(this.userImage);
    console.log(new Date().getTime());
    options = {
      fileKey: 'smfile',
      fileName: '0.png',
      headers: {},
    }
    fileTransfer.upload(this.userImage, 'https://sm.ms/api/upload', options)
    .then((data) => {
      // success
      console.log('success');
      var response = JSON.parse(data['response']);
      this.user['image'] = response['data']['url'];
      this.saveModified();
    }, (err) => {
      // error
      console.log('errpr');
      console.log(err);
    })
  }
}

export interface UserInfo {
  image: any;
  name: any;
  boardId: any;
  title: any;
  introduction: any;
}
