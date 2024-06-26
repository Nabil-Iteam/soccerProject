import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab : any = [
    {id :1,name :"EST" ,owner :"Meddeb",foundation :1919},
    {id :2,name :"ESS" ,owner :"Charfeddine",foundation :1930},
    {id :3,name :"CA" ,owner :"Younsi",foundation :1920},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
