import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { Register } from '../register/register';
import { Geolocation } from '@ionic-native/geolocation';
import {httpMedthodService} from "../../core/services/httpMethod.service";
import {ListProduct} from "../listproduct/listproduct"
import {Camera} from "../camera/camera";

declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [Geolocation]
})
export class HomePage {
    tab1Root = ListProduct;
    tab2Root = Camera;
    tab3Root = ListProduct;

    // map: any;
    // marker: any;
    // loginPage = Login;
    // registerPage = Register;
    // constructor(public navCtrl: NavController, private http:httpMedthodService, private geolocation:Geolocation) {
    //     this.getCurrentLocation();
    // }

    // /*listAuction() {
    //     return this.http.post("/auction/listbylocation",{"latitude":, "longitude": ,"location":1})
    // }*/
    // loadMap(lat, lng){
    //     this.map = new google.maps.Map(document.getElementById('map'), {
    //         center: { lat: lat, lng: lng },
    //         zoom: 12
    //     });
    // }
    // getCurrentLocation() {
    //     this.geolocation.getCurrentPosition().then((res) => {
    //         this.loadMap(res.coords.latitude, res.coords.longitude);
    //     })
    // }

    // ionViewDidLoad(){
    // }
    // createMarker(lat, lng) {
    //     this.marker  = new google.maps.Marker({
    //         position: {lat: lat, lng: lng},
    //         map: this.map,
    //         title: 'Marker'
    //     });
    // }
    // removeMarker() {
    //     this.marker.setMap(null);
    // }

}
