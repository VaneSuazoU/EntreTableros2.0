import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const usuario = auth.obtenerUsuario();

  if (usuario) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
