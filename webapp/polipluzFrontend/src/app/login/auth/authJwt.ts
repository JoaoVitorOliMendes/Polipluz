import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, mergeAll } from "rxjs/operators";
import { LocalStorageService, SessionStorageService } from "ngx-webstorage";
import { Login } from "../../models/login.model";
import { serverUrl } from "../../shared/serverUrl";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class authJwt {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService
  ) {}

  getToken(): String {
    const localStorage: String | null = this.localStorageService.retrieve('poliToken');
    const sessionStorage: String | null = this.sessionStorageService.retrieve('poliToken');
    return localStorage ?? sessionStorage ?? '';
  }

  login(login: Login): Observable<void> {
    return this.http.post(`${serverUrl}/login`, login, {responseType: 'text'}).pipe(
      map(res => {
        this.authenticateSuccess(res)
      }))
  }

  authJWT(token: String): Observable<void> {
    return this.http.post(`${serverUrl}/authenticate`, token, {responseType: 'text'}).pipe(
      map(res => {
        
      }))
  }

  logout() {
    this.localStorageService.clear('poliToken');
    this.sessionStorageService.clear('poliToken');
  }

  private authenticateSuccess(response: String): void {
    const jwt = response;
    this.localStorageService.store('poliToken', jwt);
    this.sessionStorageService.store('poliToken', jwt);
  }
}