import {Component, OnInit} from '@angular/core';
import {NoticeService} from "../index/notices/notice.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Notice} from "../index/notices/notice";
import {Editor} from "codemirror";

@Component({
  selector: 'app-edit-notice',
  templateUrl: './edit-notice.component.html',
  styleUrls: ['./edit-notice.component.scss'],
  providers: [NoticeService]
})
export class EditNoticeComponent implements OnInit {

  constructor(private noticeSv: NoticeService, private _route: ActivatedRoute, private _router: Router) {
  }

  currentNotice: Notice = null;

  ngOnInit() {
    let currentId;

    this._route.params.subscribe(
      (params: Params) => {
        currentId = params['id'];
        this.noticeSv.getNoticeByID(currentId).subscribe(
          (nt: Notice) => {
            this.currentNotice = nt;
          }
        );
      }
    );
  }

  onSubmit() {
    this.noticeSv.saveNoticeChanges(this.currentNotice).subscribe(res => {
      if (res['success']) alert('Changed Successfully');
    });
  }

  onRemoveNotice() {
    this.noticeSv.removeNotice(this.currentNotice).subscribe(res => {
      if (res['success']) alert('Remove successfully!');
      this._router.navigate(['/'], {});
    })
  }

}
