import { Component, OnInit } from '@angular/core';
import { matchesTab } from 'src/app/shared/data';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  data : string ="Matches"
  T = []
  date :any = new Date()
  constructor() { }

  ngOnInit(): void {
    this.getAllMatches()
  }

  getAllMatches(){

    this.T = JSON.parse(localStorage.getItem('matches') || "[]")

    console.log(this.T);
    
    
  }

}
