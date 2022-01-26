import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { authJwt } from '../app/login/auth/authJwt';
import { serverUrl } from "../app/shared/serverUrl";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(
        private authJwt: authJwt,
        private router: Router
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authJwt.getToken();
        const isApiUrl = request.url.startsWith(serverUrl);
        
        if (token && isApiUrl) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}