import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(private router: Router) {}

  login(): void {
    // Perform login logic here
    // Example: Call an authentication service or API

    // Redirect to home page on successful login
    this.router.navigate(['/home']);
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

}
