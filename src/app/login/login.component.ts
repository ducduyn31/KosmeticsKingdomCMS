import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private AuthSub: Subscription;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm): void {
    let username = form.controls.username.value;
    let password = form.controls.password.value;

    this.AuthSub = this.authService.authenticate(username, password).subscribe(res => {
      if (res['success'] && res['token']) {
        localStorage.setItem('token', res['token']);
        this.route.navigate(['/'], {relativeTo: null});
      }
    }, err => {console.log(err)}, () => {});
  }

  ngOnDestroy(): void {
    this.AuthSub.unsubscribe();
  }

}
