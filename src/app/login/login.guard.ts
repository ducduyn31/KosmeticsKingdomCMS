import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginComponent} from "./login.component";
import {AuthService} from "../auth.service";

@Injectable()
export class LoginGuard implements CanDeactivate<LoginComponent>, CanActivate {

  constructor(private authService: AuthService, private route: Router) {
  }

  canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.verify(localStorage.getItem('token'));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let isCurrentTokenValid = this.authService.verify(localStorage.getItem('token'));

    isCurrentTokenValid.subscribe(
      (valid: boolean) => {
        if (valid) {
          this.route.navigate(['/'], {relativeTo: null});
        }
      }
    );

    return isCurrentTokenValid.map(v => !v);
  }

}
