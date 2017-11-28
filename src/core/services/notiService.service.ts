import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import 'rxjs';

@Injectable()
export class notiService {
    constructor(private alertCtrl: AlertController) {

    }
    presentAlert(title:string, subTitle:string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    }
}