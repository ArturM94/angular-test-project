import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamMembers: TeamMember[];

  constructor() {
    this.teamMembers = [
      {name: 'WFM 1'},
      {name: 'WFM 2'},
      {name: 'WFM 3'},
      {name: 'WFM 4'},
      {name: 'WFM 5'}
    ];
  }
}

export class TeamMember {
  name: string;
}
