import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// Declare these variables so the HTML can see them
  email = ''; 
  password = '';

  constructor(private router: Router) {}

  // Declare this function so the (click) event works
  onLogin() {
    if (this.email === 'admin@hotel.com' && this.password === 'admin123') {
      this.router.navigate(['/admin/manage-rooms']);
    } else {
      this.router.navigate(['/customer/rooms']);
    }
  }
}
