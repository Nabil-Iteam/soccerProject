import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  playersTab : any = []

  constructor(private pService : PlayerService) { }

  ngOnInit(): void {
    this.pService.getAllPlayers().subscribe(
      (res)=>{
        this.playersTab = res;
      }
    )
  }

}
