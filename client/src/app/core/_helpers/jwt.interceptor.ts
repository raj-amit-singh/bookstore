import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { UserService } from '../_services/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private userService: UserService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser: User = this.userService.currentUserValue;
        if (currentUser != undefined && currentUser.authToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentUser.authToken}`
                }
            });
        }
        return next.handle(request);
    }
}
