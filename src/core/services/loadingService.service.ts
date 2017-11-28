import { Injectable } from '@angular/core';
import {LoadingController} from "ionic-angular";
import 'rxjs';

@Injectable()
export class LoadingService {
    loading: any;
    constructor(public loadingCtrl: LoadingController) {

    }
    presentLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    }
    hideLoading(){
        this.loading.dismiss();
    }
}