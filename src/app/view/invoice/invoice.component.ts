import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  invoices: any[] = [];
  customer: any;
  companyID: number;

  constructor(private invoiceService: InvoiceService, private router: Router) {
    this.customer = JSON.parse(localStorage.getItem('customer'));
    this.companyID = this.customer.companyID;
  }

  getInvoices() {
    this.invoiceService
      .getInvoices(this.customer.customerID)
      .pipe(
        map((res: any) => {
          this.invoices = res;
          console.log(this.invoices);
        })
      )
      .subscribe((x) => {});
  }

  proceedToInvoiceDetails(invoiceNo: string) {
    this.router.navigateByUrl(`/invoice/${this.companyID}/${invoiceNo}`);
  }

  ngOnInit(): void {
    this.getInvoices();
  }
}
