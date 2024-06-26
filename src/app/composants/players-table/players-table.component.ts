import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  playersTab : any = [
    {id :1,name :"AHMED" ,position :"DEFF",number :23,age:20},
    {id :2,name :"SAAD" ,position :"DEFF",number :3,age:37},
    {id :2,name :"ALI" ,position :"GARD",number :2,age:17},
    {id :4,name :"AHMED" ,position :"ATT",number :7,age:30},
      ]

  constructor() { }

  ngOnInit(): void {
  }

}
