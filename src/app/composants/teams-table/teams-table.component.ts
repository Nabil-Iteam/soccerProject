import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab : any = []

  constructor(private tService : TeamService) {}

  ngOnInit(): void {
    this.tService.getAllTeams().subscribe(
      (res)=>{
        this.teamsTab = res ;
      }
    )
  }

}
