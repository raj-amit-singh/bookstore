import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';


@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      // const currentUser = this.userService.currentUserValue;
      // if (!currentUser) {
      //   return true;
      // }
      // this.router.navigate(['/user/profile'], { queryParams: { returnUrl: state.url } });
      return false;
    }
}