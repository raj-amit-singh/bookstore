import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';


  constructor(private router: Router, private _userService: UserService) {}

  login(): void {
    this._userService.login({email: this.email, password: this.password}).subscribe(()=>{
      this.router.navigate(['/home']);
    },(error)=>{

    })
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

}
