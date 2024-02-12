import { Injectable, inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
 class AuthGuard {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // if (this.authService.isAuthenticated() ) {
      return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }
 }
  export const IsAuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean =>{
    return inject(AuthGuard).canActivate(next, state)
}
