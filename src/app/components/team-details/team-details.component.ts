import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Teammate } from '../../models';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  teammate$: Teammate;
  teammateId$: string;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.teammateId$ = params.id);
  }

  ngOnInit() {
    this.getTeammate();
  }

  getTeammate(): void {
    this.teamService.getTeammate(this.teammateId$).subscribe(teammate => {
      this.teammate$ = teammate;
    });
  }

}
