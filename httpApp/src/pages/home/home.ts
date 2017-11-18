import { RequestProvider } from './../../providers/request/request';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:string;
  a:number;
  b:number;
  getResponse:any
  postResponse:any
  constructor(public navCtrl: NavController, public request:RequestProvider) {

  }

  // ionViewDidLoad(){
  //  this.request.test(3);
  // }

  getRequest(name){
    this.request.get(name).then(data=>{
      this.getResponse=data;
    })
  }

  postRequest(a,b){
    this.request.post(a,b).then(data=>{
      this.postResponse=data;    
    })
  }

}
