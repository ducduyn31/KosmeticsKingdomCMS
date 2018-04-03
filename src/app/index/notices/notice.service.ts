import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notice} from "./notice";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {NOTICES_SERVER} from "../../config";

@Injectable()
export class NoticeService {

  private noticeServer = NOTICES_SERVER;

  private notices: Notice[] = [];
  private noticesSubject: Subject<Notice[]> = new Subject<Notice[]>();

  constructor(private _http: HttpClient) { }

  getNotices(): Observable<Notice[]> {

    this._http.get(this.noticeServer, {params: {token: localStorage.getItem('token')}}).subscribe(
      (ns: Notice[]) => {
        this.notices = ns;
        this.noticesSubject.next(this.notices);
      }
    );
    return this.noticesSubject.asObservable();
  }

  getNoticeByID(id: string): Observable<Notice> {
    return this._http.get<Notice>(this.noticeServer + '/getNoticeAsAdmin/' + id, {params: {token: localStorage.getItem('token')}});
  }

  saveNoticeChanges(notice: Notice): Observable<any> {
    return this._http.put(this.noticeServer,{notice}, {params: {token: localStorage.getItem('token')}});
  }
}
