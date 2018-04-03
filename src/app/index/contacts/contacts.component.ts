import { Component, OnInit } from '@angular/core';
import {ContactsService} from "./contacts.service";
import {Contact} from "./contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactSv: ContactsService) { }

  ngOnInit() {
    this.contactSv.getCustomerSupportRequests().subscribe((res: Contact[]) => {
      this.contacts = res;
    },()=>{},()=>{console.log('complete')});
  }

}
