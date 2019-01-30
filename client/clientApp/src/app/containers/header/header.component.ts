import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public autorithe: boolean = false;
  constructor(private authService: AuthService, private router : Router) {
    this.autorithe = this.authService.isAuthenticated();
   }

  ngOnInit() {
  }

  public logout(): void{
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

}
