import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Bookstore';

  constructor(private router: Router) {}


  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
