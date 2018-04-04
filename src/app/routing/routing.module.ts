import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {LoginGuard} from "../login/login.guard";
import {IndexComponent} from "../index/index.component";
import {IndexGuard} from "../index/index.guard";
import {EditNoticeComponent} from "../edit-notice/edit-notice.component";
import {NewNoticeComponent} from "../new-notice/new-notice.component";

@NgModule({
  imports: [
    RouterModule.forRoot(RoutingModule.routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
  static routes: Route[] = [
    {path: '', component: IndexComponent, pathMatch: 'full', canActivate: [IndexGuard]},
    {path: 'login', component: LoginComponent, canDeactivate: [LoginGuard], canActivate: [LoginGuard] },
    {path: 'edit/:id', component: EditNoticeComponent, canActivate: [IndexGuard] },
    {path: 'newNotice', component: NewNoticeComponent, canActivate: [IndexGuard] },
    {path: '**', redirectTo: ''}
  ];
}
