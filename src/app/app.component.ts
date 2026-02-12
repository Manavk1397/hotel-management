import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentRole: 'admin' | 'customer' | 'guest' = 'guest';

  constructor(private router: Router) {

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
    this.currentRole = 'guest'; 
    this.router.navigate(['/auth/login']);
  }
}
