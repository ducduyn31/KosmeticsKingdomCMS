import {Component, Input, OnInit} from '@angular/core';
import {Notice} from "../notice";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  @Input() notice: Notice;

  constructor() { }

  ngOnInit() {
  }

}
