import { Component, OnInit } from '@angular/core';

import { Teammate } from './../../models/teammate';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  title: string;
  team$: Teammate[];

  constructor(private data: TeamService) { }

  ngOnInit() {
    this.title = 'Meet our Team!';
    this.getTeam();
  }

  getTeam() {
    this.data.getTeam().subscribe(data => {
      console.log(data);
      return this.team$ = data;
    });
  }

}
