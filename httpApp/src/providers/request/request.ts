// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {
  dataFromServe:any;
  ip:string;

  constructor(public http: HTTP) {
    this.ip='http://192.168.1.117:3000';
  }

  test(num:number){
    alert(num);
  }

  get(name:string){
    return new Promise((res,rej)=>{
      this.http.get(`${this.ip}/hello/${name}`, {}, {})
      .then(data => {
        if(data.status==200){
          res(JSON.parse(data.data).hello);
        }
      })
      .catch(error => {
        rej(error.error);
      });
    })
  }

  post(x:number,y:number){
    return new Promise((res,rej)=>{
      this.http.post(`${this.ip}/sum`,{a:x,b:y}, {})
      .then(data => {
        if(data.status==200){ 
          res(JSON.parse(data.data).sum);
        }
      })
      .catch(error => {
        rej(error.error);
      });
    })
  }

}
