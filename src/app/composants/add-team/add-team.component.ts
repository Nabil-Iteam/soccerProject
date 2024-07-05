import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team : any = {}
  constructor() { }

  ngOnInit(): void {
  }

  addTeam(){
    console.log("this is team" , this.team);
    
  }
}
