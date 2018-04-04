import { Component, OnInit } from '@angular/core';
import {Notice} from "../index/notices/notice";
import {NgForm} from "@angular/forms";
import {NoticeService} from "../index/notices/notice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-notice',
  templateUrl: './new-notice.component.html',
  styleUrls: ['./new-notice.component.scss'],
  providers: [NoticeService]
})
export class NewNoticeComponent implements OnInit {

  currentNotice: Notice = new Notice(null,'','','', null,null, new Date().toISOString());

  constructor(private noticeSv: NoticeService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let subject = form.controls['subject'].value;
    let author = form.controls['author'].value;
    let rawContent = form.controls['rawContent'].value;

    this.noticeSv.submitNotice(subject, author, rawContent).subscribe(res => {
      if (res['success']) {
        alert('Submit Successful');
        this._router.navigate(['/'], {});
      }
    })
  }

}
