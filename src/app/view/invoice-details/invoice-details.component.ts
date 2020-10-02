import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss'],
})
export class InvoiceDetailsComponent implements OnInit {
  private companyID;
  private invoiceID;
  details: any;
  payments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService
  ) {}

  getInvoiceDetails() {
    this.invoiceService
      .getInvoiceDetails(this.companyID, this.invoiceID)
      .pipe(
        map((res) => {
          this.details = res;
          this.payments = this.details.payments;
          console.log(this.details);
        })
      )
      .subscribe((x) => {});
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.companyID = parseInt(params['companyID']);
      this.invoiceID = params['invoiceID'].toString();

      console.log(this.invoiceID);
      this.getInvoiceDetails();
    });
  }
}
