import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeam() {
    return this.http.get<Teammates>('https://randomuser.me/api/?lego&results=9')
      .pipe(map(response => response.results));
  }

  getTeammate(teammateId) {
    return this.http.get<Teammates>(`https://randomuser.me/api/?lego&id=${teammateId}`)
      .pipe(map(response => response.results[0]));
  }
}

export interface Teammates {
  results: object;
}
