import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from 'src/app/services/auth/storage.service';
import { Role } from 'src/app/constant/constants';

export const authGuard: CanActivateFn = (route, state) => {
  const storageService = inject(StorageService);
  const router = inject(Router);
  const userRole = storageService.getUserRole();

  if (storageService.getToken() && userRole) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

export const adminGuard: CanActivateFn = (route, state) => {
  const storageService = inject(StorageService);
  const router = inject(Router);
  const userRole = storageService.getUserRole();

  if (storageService.getToken() && userRole === Role.ADMIN) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

export const userGuard: CanActivateFn = (route, state) => {
  const storageService = inject(StorageService);
  const router = inject(Router);
  const userRole = storageService.getUserRole();

  if (storageService.getToken() && userRole === Role.USER) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

