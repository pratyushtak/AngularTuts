import { CanActivateFn, Router } from '@angular/router';
import { AuthState } from '../service/auth-state';
import { inject } from '@angular/core';

export const authaGuard: CanActivateFn = () => {
  const authState = inject(AuthState)
  const router = inject(Router)
  if(authState.loginState)
    return true;
  
  router.navigate(['/']);

  return false;
};
