import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  signup(): void {
    // Perform signup logic here
    // Example: Call an authentication service or API

    // Redirect to home page on successful signup
    this.router.navigate(['/home']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
