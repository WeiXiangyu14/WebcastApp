import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

import { Login } from '../../providers/login'
import { Storage } from '../../providers/storage'

// import { emailValidator } from './../../providers/validator'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Login, Storage]
})
export class LoginPage {
  nextPage: any;
  flag: string;

  succeed: boolean;

  loginForm: FormGroup;
  LoginId: FormControl;
  LoginPwd: FormControl;

  constructor(
    public navCtrl: NavController,  
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public loginService: Login,
    public storageService: Storage
    ) {
        this.flag = this.navParams.get('flag');
        this.nextPage = this.navParams.get('page');
        this.LoginId = new FormControl("", (Validators.required, Validators.minLength(10), Validators.maxLength(10)))
        this.loginForm = this.formBuilder.group({
          LoginId: this.LoginId,
          LoginPwd: ['', [Validators.required]]
        });
        this.succeed = false;
    } 

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  login(user, _event){
    this.loginService.login({student_id: user['LoginId'], password: user['LoginPwd']})
      .subscribe(
       data => {
          this.succeed = !data['succeed'];
          console.log(data);
          if(!this.succeed){
            this.storageService.write('token', data['token']);
            if(this.flag == 'next'){
              this.navCtrl.insert(0, this.nextPage);
              // console.log(this.navCtrl.length());
              this.navCtrl.popToRoot();
              // this.navCtrl.push(this.nextPage);
            }
            else{
              this.navCtrl.pop();
            }
          }
        } 
      );
    
  }

}
