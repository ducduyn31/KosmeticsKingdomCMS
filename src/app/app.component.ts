import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authSv: AuthService, private route: Router) {
  }

  ngOnInit(): void {
    let tk = localStorage.getItem('token');
    if (tk) {
      this.authSv.verifyAndRoute(tk, this.route);
    } else {
      this.route.navigate(['/login'], {preserveFragment: false, preserveQueryParams: false});
    }
  }

}
