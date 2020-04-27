import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from './storage.service';
import { AppSettings } from '../app.settings';
@Injectable()
export class AuthenticationValidationService implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.storageService.getItemFromCookies(AppSettings.TOKEN_KEY)) {
      return true;
    }
    this.router.navigate(['/signin']);
    return false;
  }
}
