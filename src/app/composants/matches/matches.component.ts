import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  // data : string ="Matches"
  T :any = []
  date :any = new Date()
  constructor(private mService:MatchService) { }

  ngOnInit(): void {
    this.mService.getAllMatches().subscribe((res)=>{
      console.log("this is respoonse from BE", res);
      this.T =  res ;
      
    })
  }

}
