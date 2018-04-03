import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AUTH_SERVER} from "./config";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {

  private authServer = AUTH_SERVER;

  constructor(private _http: HttpClient) {
  }

  authenticate(username: string, password: string) {

    return this._http.post(this.authServer, {username,password}, {});
  }

  verifyAndRoute(token: string, router: Router): boolean {
    this._http.post(this.authServer + '/verify', {}, {params: {token: token}}).subscribe(res => {
      if (!res['success']) {
        router.navigate(['/login'], {preserveFragment: false, preserveQueryParams: false});
      }
    });
    return false;
  }

  verify(token: string) : Observable<boolean> {
    return this._http.post(this.authServer + '/verify', {}, {params: {token}}).map(res => res['success']);
  }

}
