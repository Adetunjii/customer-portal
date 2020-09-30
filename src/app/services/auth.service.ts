import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL: any;

  constructor(private httpClient: HttpClient) {
    this.baseURL = environment.apiurl;
  }

  login(customerID: number) {
    return this.httpClient.get(
      this.baseURL + `/CustomerPortal/GetCustomerInfo/${customerID}`
    );
  }
}
