import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private authService: AuthService, private router: Router) { 
    }
 
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(next.data.allowedRoles)
		if(!this.authService.isAuthenticated()) {
             	this.router.navigate(['/auth']);
                 return false;
             }
            return true;
    }
	canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(next.data.allowedRoles)

		if(!this.authService.isAuthenticated()) {
			this.router.navigate(['/auth']);
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