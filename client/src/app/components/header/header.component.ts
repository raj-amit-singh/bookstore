import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Bookstore';
  userName: string|undefined = ""

  constructor(private router: Router, 
    private authService: UserService,
    ) {}

  ngOnInit(): void {
    this.userName = this.authService.currentUserValue?.name
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
