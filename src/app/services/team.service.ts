import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Teammate, TeammateAdapter } from '../models';
import { RandomUserResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl = 'https://randomuser.me/api';
  private teamSize = 9;

  constructor(
    private http: HttpClient,
    private adapter: TeammateAdapter,
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getTeam(): Observable<Teammate[]> {
    return this.http.get(`${this.baseUrl}/?lego&results=${this.teamSize}`).pipe(
      map((data: RandomUserResponse) => data.results.map(item => this.adapter.adapt(item))),
      tap((team: Teammate[]) => console.log('Fetched team:', team)),
      catchError(this.handleError<Teammate[]>('getTeam', []))
    );
  }

  getTeammate(teammateId): Observable<Teammate> {
    return this.http.get(`${this.baseUrl}/?lego&id=${teammateId}`).pipe(
      map((data: RandomUserResponse) => data.results[0]),
      map(item => this.adapter.adapt(item)),
      tap((teammate: Teammate) => console.log('Fetched teammate:', teammate)),
      catchError(this.handleError<Teammate>(`getTeammate by id=${teammateId}`))
    );
  }
}
