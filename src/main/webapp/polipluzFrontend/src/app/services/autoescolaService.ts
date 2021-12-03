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

    create(time: Autoescola): Observable<EntityResponseType> {
        return this.http.post<Autoescola>(`${serverUrl}/autoescola`, time, { observe: 'response' });
    }

    getAll(): Observable<EntityArrayResponseType> {
        return this.http.get<Autoescola[]>(`${serverUrl}/autoescola`, { observe: 'response' });
    }

    /*query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<Autoescola[]>(serverUrl, { params: options, observe: 'response' });
    }*/

    delete(id: number): Observable<HttpResponse<{}>> {
        return this.http.delete(`${serverUrl}/autoescola/${id}`, { observe: 'response' });
    }
}
