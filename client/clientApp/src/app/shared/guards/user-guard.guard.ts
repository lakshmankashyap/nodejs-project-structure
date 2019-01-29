import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  public isUser: boolean = false;
  constructor(private route: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let role = JSON.parse(localStorage.getItem('user'))['user'].role;
      (role == 1) ? this.isUser = true : this.isUser = false;
      return this.isUser;
  }
}
