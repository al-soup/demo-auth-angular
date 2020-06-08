import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //  https://www.digitalocean.com/community/tutorials/angular-reactive-forms-introduction
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login() {
    this.authService.login();
  }

  loginAdmin() {
    this.authService.loginAdmin();
  }

}
