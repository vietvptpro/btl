import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Login } from '../login/login';
import {httpMedthodService} from "../../core/services/httpMethod.service";
import {notiService} from "../../core/services/notiService.service";

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  name: string;
  email: string;
  password: string;
  confirm_password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: httpMedthodService, private alert: notiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }
  Register() {
    if(this.password != this.confirm_password) {
      this.alert.presentAlert('Register fail','Password does not match');
    } else {
      this.http.post("/user/getRegister",{"email":this.email,"password":this.password,"name":this.name}).subscribe(res=> {
        if(res.status == 1) {
          this.navCtrl.push(Login,{email:this.email, password: this.password});
        } else {
          this.alert.presentAlert('Register fail',res.message);
        }
      });
    }
  }

}
