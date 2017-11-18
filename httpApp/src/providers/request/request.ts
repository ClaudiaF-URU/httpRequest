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
  constructor(public http: HTTP) {
    // console.log('Hello RequestProvider Provider');
  }

  test(num:number){
    alert(num);
  }

  get(name:string){
    return new Promise((res,rej)=>{
      this.http.get(`http://192.168.1.117:3000/hello/${name}`, {}, {})
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
      this.http.post(`http://192.168.1.117:3000/sum`,{a:x,b:y}, {})
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
