import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamMembers: TeamMember[];

  constructor(private http: HttpClient) {
    this.teamMembers = [
      {name: 'WFM 1'},
      {name: 'WFM 2'},
      {name: 'WFM 3'},
      {name: 'WFM 4'},
      {name: 'WFM 5'}
    ];
  }

  getTeam() {
    return this.http.get('https://randomuser.me/api/?lego&results=8');
  }
}

export class TeamMember {
  name: string;
}
