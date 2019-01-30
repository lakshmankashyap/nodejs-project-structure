import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { RoleEnum } from "../../../../../../shared/enum";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // console.log(next.data.allowedRoles.indexOf(0))
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/auth']);
            return false;
        }
        // console.log(this.authService.isAccessRole(), next.data.allowedRoles.indexOf(this.authService.isAccessRole()))
        if(next.data.allowedRoles.indexOf(this.authService.isAccessRole()) == -1){
            this.router.navigate(['/error404']);
            return false;
        }
        return true;
    }
    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(next.data.allowedRoles)

        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/auth']);
            return false;
        }
        if(next.data.allowedRoles.indexOf(this.authService.isAccessRole()) == -1){
            this.router.navigate(['/error404']);
            return false;
        }
        return true;
    }
}


// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor( private router: Router) { }

//     canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         console.log(next.data.allowedRoles)
// 		// if(!this.authService.isAuthenticated()) {
// 		// 	this.router.navigate(['/login']);
// 		// 	return false;
// 		// } else {
// 		// 	return true;
//         // }
//         return false;
//     }
// 	canActivateChild(): boolean {
//         // return this.authService.isAuthenticated();
//         return true;
// 	}
// }