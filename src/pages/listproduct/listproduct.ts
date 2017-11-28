import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {httpMedthodService} from "../../core/services/httpMethod.service";
import {LoadingService} from "../../core/services/loadingService.service";
import {notiService} from "../../core/services/notiService.service";
import {Login} from "../login/login";
import {ProductDetail} from "../product-detail/product-detail";
import { App } from 'ionic-angular';
import {Constants} from "../../core/common/constant";



/**
 * Generated class for the Listemployee page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-listproduct',
  templateUrl: 'listproduct.html',
})
export class ListProduct {
  listProduct: any;
  currentUser: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:httpMedthodService,private loading: LoadingService, private alert: notiService,private app: App) {
  }

  ionViewDidLoad() {
    this.getListProduct();
  }
  getListProduct() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    this.loading.presentLoading();
    this.http.get('api/getListProduct?login_token='+ this.currentUser.login_token + '&app_version='+ Constants.APP_VERSION).subscribe(res => {
      this.loading.hideLoading();
      if(res.status ==1 ) {
        this.listProduct = res.data;
      } else {
        this.alert.presentAlert('Error',res.message);
      }
    })
  }

  getProductDetails(product) {
    this.navCtrl.push(ProductDetail,{product});
  }
  logOut() {
    localStorage.clear();
    this.app.getRootNav().setRoot( Login );
  }

}
