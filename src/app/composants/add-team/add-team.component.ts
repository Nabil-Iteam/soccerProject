import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team : any = {}
  constructor(private tService : TeamService) { }

  ngOnInit(): void {
    this.tService.addTeam(this.team).subscribe(
      (res)=>{
        console.log("this res from BE",res);
      }
    )
  }

  addTeam(){
    console.log("this is team" , this.team);
    
  }
}
