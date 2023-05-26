import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user.model';
import {
  environment as env,
} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;
  authLocalStorageToken: string = `authToken`;
  constructor(
    private http: HttpClient, private router: Router,
  ) { 
    // this.currentUserSubject = new BehaviorSubject<User>(
    //   JSON.parse("")
    // );
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }

  // loginUserEmail(data:any): Observable<any> {
  //   return this.http
  //     .post<any>(`${env.BASE_URL}/api/auth/login`, data)
  //     .pipe(
  //       map(
  //         (result) => {
  //           if (result) {
  //             localStorage.clear();
  //             localStorage.setItem(
  //               this.authLocalStorageToken,
  //               JSON.stringify(result.data)
  //             );
  //             this.currentUserSubject.next(result.data);
  //           }
  //         }
  //         // catchError(this.handleError < any > ('Login'))
  //       )
  //     );
  // }


  // Fetch customer's profile and update localstorage
  // getUserProfile() {
  //   return this.http.get<any>(`${env.BASE_URL}/customer/profile`).pipe(
  //     map((result) => {
  //       localStorage.setItem(
  //         this.authLocalStorageToken,
  //         JSON.stringify(result.data)
  //       );
  //       this.currentUserSubject.next(result.data);
  //     })
  //   );
  // }

  logoutUser() {
    //call logout API
    localStorage.clear();
    // this.currentUserSubject.next(null);
  }
}
