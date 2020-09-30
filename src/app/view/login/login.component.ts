import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customerID;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.customerID).subscribe((res) => {
      localStorage.setItem('customer', JSON.stringify(res));
      this.router.navigateByUrl('/home');
    });
  }

  ngOnInit(): void {}
}
