import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
  
    }

  confirmation(){

  let resultConfirm = '';
  let password1 = '';
  let confirmPass = '';

    if((password1 != '') && (confirmPass != ''))
    {
      if (password1 == confirmPass)
        resultConfirm = 'login was successful';
      else
      resultConfirm = 'login was not successful';
    }
  }
}
