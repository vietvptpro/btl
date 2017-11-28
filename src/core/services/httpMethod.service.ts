import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Constants } from '../common/constant';
import {observable} from "rxjs/symbol/observable";
import 'rxjs';

@Injectable()
export class httpMedthodService {
    constructor(private http: Http) {
    }
    get(url:string) {
        return this.http.get(Constants.API_URL+ url).map((res: Response) => {
            return res.json();
        },).catch( (err) => {
            return observable.throw(err);
        })
    }
    post(url:string, body: any) {
        return this.http.post(Constants.API_URL+ url,body).map((res:Response) => {
            return res.json();
        }).catch( (err) => {
            return observable.throw(err);
        })
    }
}
