import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  loginAdmin() {
    this.authService.loginAdmin();
  }

}
