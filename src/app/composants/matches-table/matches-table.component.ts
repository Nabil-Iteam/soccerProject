import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
//import { matchesTab } from 'src/app/shared/data';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  x : any = 120;

allMatches : any = [];
  constructor(private mService : MatchService,
    private router:Router) { }

  ngOnInit(): void {
    this.mService.getAllMatches().subscribe((res)=>{
      console.log("this is res from BE",res ) 
        this.allMatches = res;
      });
      
  }

  deleteMatch(id:number){
    this.mService.deleteMatchById(id).subscribe(()=>{
      this.mService.getAllMatches().subscribe((response)=>{
        this.allMatches =response;
      });
    });
  }

  goToInfo(id: number){
    this.router.navigate(['matchInfo/'+id])
  }

  goToEdit(id: number){
    this.router.navigate(['editMatch/'+id])

  }

  
  }

