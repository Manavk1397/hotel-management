import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private router: Router) {} 

  onRegister(form: any) {
    if (form.valid) {
      alert('Registration Successful! Redirecting to login...');
      this.router.navigate(['/auth/login']);
    }
  }
}
