import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Autoescola } from '../models/autoescola.model';
import { serverUrl } from '../shared/serverUrl';

export type EntityResponseType = HttpResponse<Autoescola>;
export type EntityArrayResponseType = HttpResponse<Autoescola[]>;

@Injectable({ providedIn: 'root' })
export class AutoescolaService {

    constructor(
        protected http: HttpClient
    ) {}

    create(autoescola: Autoescola): Observable<EntityResponseType> {
        return this.http.post<Autoescola>(`${serverUrl}/autoescola`, autoescola, { observe: 'response' });
    }

    update(autoescola: Autoescola): Observable<EntityResponseType> {
        return this.http.put<Autoescola>(`${serverUrl}/autoescola`, autoescola, { observe: 'response' });
    }

    getAll(): Observable<EntityArrayResponseType> {
        return this.http.get<Autoescola[]>(`${serverUrl}/autoescola`, { observe: 'response' });
    }

    query(string: String): Observable<EntityArrayResponseType> {
        let params = new HttpParams().set('query', string.toString());
        return this.http.get<Autoescola[]>(`${serverUrl}/autoescola`, { params: params, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<{}>> {
        return this.http.delete(`${serverUrl}/autoescola/${id}`, { observe: 'response' });
    }
}
