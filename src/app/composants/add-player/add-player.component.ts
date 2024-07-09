import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  addPlayerForm !: FormGroup;
  player : any ={};
  team : any =[]
  teamId !: number
  constructor(
    private tService : TeamService,
    private pService : PlayerService,
    private router :Router
    ) { }

  ngOnInit(): void {
    this.tService.getAllTeams().subscribe(
      (res)=>{
        console.log("this is res from BE",res);
        this.team = res;
      }
    )
  }
  addPlayer(){
    this.player.team = {id : Number(this.teamId)}
    console.log(this.player);
    this.pService.addPlayer(this.player).subscribe(
      (res)=>{
        console.log("here response afte adding player" , res);
        this.router.navigate(['admin'])
      }
    )
    
  }
  selectTeam(evt:any){
    console.log('here team id ', evt.target.value);
    this.teamId = evt.target.value;
  }
 
}
