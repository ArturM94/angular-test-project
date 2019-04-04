import { Component, OnInit } from '@angular/core';

import { Teammate } from '../../models';
import { TeamService } from '../../services';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  title: string;
  team: Teammate[];
  searchValue = '';

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.title = 'Meet our Team!';
    this.getTeam();
  }

  getTeam(): void {
    this.teamService.getTeam().subscribe(team => {
      this.team = team;
    });
  }

}
