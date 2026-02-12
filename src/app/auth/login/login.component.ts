import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = ''; 
  password = '';

  constructor(private router: Router) {}
  onLogin() {
    if (this.email === 'admin@hotel.com' && this.password === 'admin123') {
      this.router.navigate(['/admin/manage-rooms']);
    } else {
      this.router.navigate(['/customer/rooms']);
    }
  }
}
