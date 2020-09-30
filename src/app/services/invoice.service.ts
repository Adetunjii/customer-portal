import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private baseURL;

  constructor(private httpClient: HttpClient) {
    this.baseURL = environment.apiurl;
  }

  getInvoices(customerID: number) {
    return this.httpClient.get(
      this.baseURL + `/CustomerPortal/GetInvoiceSummary/${customerID}`
    );
  }

  getInvoiceDetails(companyID: number, invoiceNo) {
    return this.httpClient.get(
      this.baseURL +
        `/CustomerPortal/GetInvoiceDetail/${companyID}/${invoiceNo}`
    );
  }
}
