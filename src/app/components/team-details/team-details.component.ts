import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  teammate$: any;
  teammateId$: string;

  constructor(private data: TeamService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.teammateId$ = params.id);
  }

  ngOnInit() {
    this.data.getTeammate(this.teammateId$).subscribe(data => {
      console.log(data);
      return this.teammate$ = data;
    });
  }

}
