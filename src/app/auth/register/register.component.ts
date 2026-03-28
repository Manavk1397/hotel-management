import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/shared/hotel.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router, private hotelService: HotelService) { }

  onRegister(form: any) {
    if (form.valid) {

      this.hotelService.register(form.value).subscribe({
        next: () => {
          alert('Registration Successful!');
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          console.error(err);
          alert('Registration failed. Check if the backend is running.');
        }
      });
    }
  }
}
