import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(dashboardRoutes),
  ],
  providers: [
    AuthGuard,
    RoleGuard
  ],
})
export class DashboardModule { }
