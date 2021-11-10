import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { serverUrl } from "../shared/serverUrl";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class registerService {

  constructor(
        private httpClient: HttpClient
  ) {}

  register(u: User): Observable<User> {
    return this.httpClient.post<User>(serverUrl + '/user', u)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err: any) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }
}
