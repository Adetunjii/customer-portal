import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customer: any;

  constructor(private router: Router) {
    this.customer = JSON.parse(localStorage.getItem('customer'));
  }

  myWallet(): void {
    this.router.navigate(['/my-wallet']);
  }

  invoice(): void {
    this.router.navigate(['/invoice']);
  }

  ngOnInit(): void {}
}
