import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  template: `
  <div class="container">
    <div class="item">
      <h1 class="title main-title">Dashboard Layout</h1>
    </div>
    <div class="menu">
      <a routerLink="home">Home</a> |
      <a routerLink="admin">Admin</a>
      <button mat-raised-button class="btn" color="primary" (click)="logout()"> Logout</button>
    </div>
  </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
