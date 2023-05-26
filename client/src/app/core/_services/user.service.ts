import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, finalize, map, of, switchMap } from 'rxjs';
import { User } from '../models/user.model';
import {
  environment as env,
} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoadingSubject: BehaviorSubject<boolean>;
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  authLocalStorageToken: string = `authToken`;
  isLoading$: Observable<boolean>;

  constructor(
    private http: HttpClient, private router: Router,
  ) { 
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  } 

  public get currentUserValue(): User | null{
    return this.currentUserSubject.value;
  }

  login(data:{email:string, password: string}): Observable<any> {
    return this.http
      .post<any>(`${env.BASE_URL}/auth/login`, data)
      .pipe(
        map(
          (result) => {
            if (result) {
              localStorage.clear();
              localStorage.setItem(
                this.authLocalStorageToken,
                JSON.stringify(result)
              );
              this.setAuthFromLocalStorage(result);
            }
          }
          // catchError(this.handleError < any > ('Login'))
        ),
        switchMap(() => this.getUserByToken()),
        finalize(() => this.isLoadingSubject.next(false))
      );
  }

  // private methods
  private setAuthFromLocalStorage(auth: any): boolean {
    // store auth accessToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (auth && auth.token) {
      localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
      return true;
    }
    return false;
  }

  private getAuthFromLocalStorage(): User | undefined {
    try {
      const storedUser = localStorage.getItem(this.authLocalStorageToken);
      const authData = storedUser ? JSON.parse(storedUser) : undefined;;
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  getUserByToken(): Observable<User | undefined> {
    const auth = this.getAuthFromLocalStorage();
    if (!auth || !auth.token) {
      return of(undefined);
    }

    this.isLoadingSubject.next(true);
    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.token}`,
    });
    return this.http
      .get<any>(`${env.BASE_URL}/user/`, {
        headers: httpHeaders,
      })
      .pipe(
        map((user: any) => {
          console.log(user);
          if (user) {
            this.currentUserSubject = new BehaviorSubject<User | null>(user);
          } else {
            this.logout();
          }
          return user;
        }),
        finalize(() => this.isLoadingSubject.next(false))
      );
  }

   getUserProfile() {
    return this.http.get<any>(`${env.BASE_URL}/user`).pipe(
      map((result) => {
        this.currentUserSubject.next(result);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.authLocalStorageToken);
    this.router.navigate(['/'], {
      queryParams: {},
    });
    this.currentUserSubject.next(null);
  }
}
