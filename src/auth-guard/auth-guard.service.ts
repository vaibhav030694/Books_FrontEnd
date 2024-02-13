import { CanActivateFn, Router } from '@angular/router';
import { Injectable,inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export const UserGuard: CanActivateFn = (route, state) => {
  const authGuard = new AuthGuard(inject(AuthService), inject(Router));
  return authGuard.canActivate();
};
