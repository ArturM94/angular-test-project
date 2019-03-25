import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  title: string;
  teammates$: object;

  constructor(private data: TeamService) { }

  ngOnInit() {
    this.title = 'Meet our Team!';
    this.data.getTeam().subscribe(data => this.teammates$ = data);
  }

}
