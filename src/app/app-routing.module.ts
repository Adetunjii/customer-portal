import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { InvoiceDetailsComponent } from './view/invoice-details/invoice-details.component';
import { InvoiceComponent } from './view/invoice/invoice.component';
import { LoginComponent } from './view/login/login.component';
import { WalletComponent } from './view/wallet/wallet.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'my-wallet', component: WalletComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'invoice/:companyID/:invoiceID', component: InvoiceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
