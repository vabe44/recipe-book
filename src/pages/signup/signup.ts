import { AuthService } from './../../services/auth';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(private authService: AuthService) {
  }

  onSignup(form: NgForm) {
    this.authService.signUp(form.value.email, form.value.password)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

}
