import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  match :any ={}
  id :any = null
  constructor(private mService:MatchService,
    private activatedRoute : ActivatedRoute,
    private router :Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.mService.getMatchById(this.id).subscribe((res)=>{
      console.log("this is res from BE", res);
      this.match = res   
    })
  }

  editMatch(){
    this.mService.updateMatch(this.match).subscribe((response)=>{
      this.router.navigate(['admin'])
    })
  }

}
