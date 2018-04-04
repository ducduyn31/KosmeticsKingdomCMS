import { Component, OnInit } from '@angular/core';
import {NoticeService} from "./notice.service";
import {Notice} from "./notice";

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
  providers: [NoticeService]
})
export class NoticesComponent implements OnInit {

  notices: Notice[] = [];

  constructor(private noticeSv: NoticeService) { }

  ngOnInit() {
    this.noticeSv.getNotices().subscribe(
      (nts: Notice[]) => {
        this.notices = nts;
      }
    )
  }
}
