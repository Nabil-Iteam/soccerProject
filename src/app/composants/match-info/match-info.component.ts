import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  id !:number;
  match :any = {};
  constructor(private mService:MatchService,
    private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.mService.getMatchById(this.id).subscribe((res)=>{
    console.log("this is res from BE",res);
    this.match = res;

    
    })
  }

}
