import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Teammate } from '../../models';
import { ActivatedRoute } from '@angular/router';

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
