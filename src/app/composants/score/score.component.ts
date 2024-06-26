import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input()
  obj:any ;

  constructor() { }

  ngOnInit(): void {
  }

  compare(a:any , b:any){
    if(a>b){
      return ["win","green"]
    }
    else if(a<b)
    {
      return ["loss","blue"]
    }
    else
    {
      return ["draw","yellow"]
    }
  }

}
