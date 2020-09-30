import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  wallet: any;
  customer: any;
  customerID: number;

  constructor(private walletService: WalletService) {
    this.customer = JSON.parse(localStorage.getItem('customer'));
    this.customerID = this.customer.customerID;
  }

  getWallet() {
    this.walletService
      .getWalletDetails(this.customerID)
      .pipe(
        map((res) => {
          this.wallet = res;
        })
      )
      .subscribe((x) => {});
  }

  ngOnInit(): void {
    console.log(this.customer);
    this.getWallet();
  }
}
