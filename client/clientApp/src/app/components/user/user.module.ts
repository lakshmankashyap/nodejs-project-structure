import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './home/user-home.component';
import { UserProfileComponent } from './profile/user-profile.component';

@NgModule({
  declarations: [ UserHomeComponent, UserProfileComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
