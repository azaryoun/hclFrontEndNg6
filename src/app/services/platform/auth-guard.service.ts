import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppUtility } from '../../app.utility';

// a service which will be injected into routing module to guard our pages against unauhtorized access
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private _router: Router) {
    }
    canActivate() {
        if (AppUtility.isLoggedIn() === true) {
            return true;
        } else {
            AppUtility.logout();
            this._router.navigate(['']);
            return false;
        }
    }
}
