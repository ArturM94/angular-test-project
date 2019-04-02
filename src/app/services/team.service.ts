import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  getTeam(): Observable<Teammate[]> {
    return this.http.get(`${this.baseUrl}/?lego&results=${this.teamSize}`).pipe(
      map((data: RandomUserResponse) => data.results.map(item => this.adapter.adapt(item)))
    );
  }

  getTeammate(teammateId): Observable<Teammate> {
    return this.http.get(`${this.baseUrl}/?lego&id=${teammateId}`).pipe(
      map((data: RandomUserResponse) => data.results[0]),
      map(item => this.adapter.adapt(item))
    );
  }
}
