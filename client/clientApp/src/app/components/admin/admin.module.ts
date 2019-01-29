import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminUserComponent } from './user/admin-user.component';
import { AdminBookComponent } from './book/admin-book.component';

@NgModule({
  declarations: [AdminDashboardComponent, AdminBookComponent, AdminUserComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
