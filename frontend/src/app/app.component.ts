import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 1. Define the property here so the HTML can see it
  // We use a union type instead of 'any' to stay professional
  currentRole: 'admin' | 'customer' | 'guest' = 'guest';

  constructor(private router: Router) {
    // 2. This logic updates the role whenever the page changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/admin')) {
          this.currentRole = 'admin';
        } else if (event.url.includes('/customer')) {
          this.currentRole = 'customer';
        } else {
          this.currentRole = 'guest';
        }
      }
    });
  }

  logout() {
    this.currentRole = 'guest'; // Reset role
    this.router.navigate(['/auth/login']);
  }
}
