import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RoutingModule} from "./routing/routing.module";
import {AuthService} from "./auth.service";
import {HttpClientModule} from "@angular/common/http";
import { ContactsComponent } from './index/contacts/contacts.component';
import {LoginGuard} from "./login/login.guard";
import { IndexComponent } from './index/index.component';
import {IndexGuard} from "./index/index.guard";
import { HeaderComponent } from './index/header/header.component';
import { NoticesComponent } from './index/notices/notices.component';
import { NoticeComponent } from './index/notices/notice/notice.component';
import { ContactComponent } from './index/contacts/contact/contact.component';
import { ToDateFormatPipe } from './to-date-format.pipe';
import { EditNoticeComponent } from './edit-notice/edit-notice.component';
import {CodemirrorModule} from "@nomadreservations/ngx-codemirror";
import { KeepHtmlPipe } from './keep-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsComponent,
    IndexComponent,
    HeaderComponent,
    NoticesComponent,
    NoticeComponent,
    ContactComponent,
    ToDateFormatPipe,
    EditNoticeComponent,
    KeepHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    CodemirrorModule
  ],
  providers: [AuthService, LoginGuard, IndexGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
