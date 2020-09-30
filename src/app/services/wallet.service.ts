import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  private baseURL: string;
  constructor(private httpClient: HttpClient) {
    this.baseURL = environment.apiurl;
  }

  getWalletDetails(customerID: number) {
    return this.httpClient.get(
      this.baseURL + `/CustomerPortal/GetCustomerWallet/${customerID}`
    );
  }
}
