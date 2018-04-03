import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../contact";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;

  constructor(private contactSv: ContactsService) { }

  ngOnInit() {
  }

  onRequestDelete() {
    this.contactSv.removeCustomerSupportRequests(this.contact).subscribe(res => console.log(res));
  }

}
