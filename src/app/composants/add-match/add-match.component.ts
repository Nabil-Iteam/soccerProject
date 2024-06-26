import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  addMatchForm !: FormGroup

  match:any ={}
  constructor() { }

  ngOnInit(): void {
  }
  
  addMatch(){
    let T = JSON.parse((localStorage.getItem('matches')) || '[]')

    // let id = 1
    // if ( T.length !=0) {
    //   id = T[T.length-1].id + 1
    // }
    // this.match.id = id

    this.match.id = T.length != 0 ? T.at(-1).id+1 : 1
    T.push(this.match)
    localStorage.setItem('matches',JSON.stringify(T))
    console.log(this.match); 
    
  }

}
