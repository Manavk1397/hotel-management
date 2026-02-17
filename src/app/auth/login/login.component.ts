import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../../shared/hotel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = ''; 
  password = '';

  constructor(private router: Router, private hotelService: HotelService) {}
  onLogin() {
  this.hotelService.login({ email: this.email, password: this.password }).subscribe({
    next: (user) => {
      user.role === 'admin' 
        ? this.router.navigate(['/admin/manage-rooms']) 
        : this.router.navigate(['/customer/rooms']);
    },
    error: () => alert('Invalid credentials')
  });
}
}
