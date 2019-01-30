import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user/profile/user-profile.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin/dashboard/admin-dashboard.component';
import { AdminBookComponent } from './components/admin/book/admin-book.component';
import { AdminUserComponent } from './components/admin/user/admin-user.component';
import { UserHomeComponent } from './components/user/home/user-home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RoleEnum } from '../../../../shared/enum';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: [RoleEnum.AdminRole, RoleEnum.UserRole]
    },
  },
  {
    path: 'books',
    component: BookComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: [ RoleEnum.UserRole]
    },
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: [RoleEnum.AdminRole, RoleEnum.UserRole]
    },
    children: [
      { path: '', component: UserHomeComponent },
      { path: 'profile', component: UserProfileComponent },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'reg', component: RegistrationComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: [RoleEnum.AdminRole]
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
      },
      { path: 'books', component: AdminBookComponent },
      { path: 'users', component: AdminUserComponent },
    ]
  },
  { path: 'error404', component: ErrorPageComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
