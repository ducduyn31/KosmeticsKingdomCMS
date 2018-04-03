import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from "./contact";
import {Observable} from "rxjs/Observable";
import {CUSTOMER_SUPPORT_SERVER} from "../../config";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ContactsService {

  private customerSupportServer = CUSTOMER_SUPPORT_SERVER;
  private tempContact: Contact[] = [];
  private customerRequestList: Subject<Contact[]> = new Subject();

  constructor(private _http: HttpClient) {
  }

  public getCustomerSupportRequests(): Observable<Contact[]> {
    this._http.get<any>(this.customerSupportServer, {params: {token: localStorage.getItem('token')}}).subscribe(
      (contacts: Contact[]) => {
        this.tempContact = contacts;
        this.customerRequestList.next(this.tempContact);
      }
    );

    return this.customerRequestList.asObservable();
  }

  public removeCustomerSupportRequests(contact: Contact): Observable<Contact[]> {
    this._http.delete(this.customerSupportServer, {
      params: {
        token: localStorage.getItem('token'),
        id: contact._id
      }
    }).subscribe(res => {
      if (res['success']) {
        this.tempContact.splice(this.tempContact.findIndex((c : Contact) => c._id===contact._id), 1);
        this.customerRequestList.next(this.tempContact);
      }
    });

    return this.customerRequestList.asObservable();
  }
}
