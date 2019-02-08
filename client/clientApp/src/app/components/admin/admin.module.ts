import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminUserComponent } from './user/admin-user.component';
import { AdminBookComponent } from './book/admin-book.component';
import { PopupBookComponent } from './popup/book/book.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PopupAuthorComponent } from './popup/author/author.component';
import { AdminAuthorComponent } from './author/admin-author.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashboardComponent, 
    AdminBookComponent, 
    AdminUserComponent,
    PopupBookComponent,
    PopupAuthorComponent,
    AdminAuthorComponent
  ],
  imports: [
    CommonModule, 
    NgSelectModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    PopupBookComponent,
    PopupAuthorComponent
  ]
})
export class AdminModule { }
