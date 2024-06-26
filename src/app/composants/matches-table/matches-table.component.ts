import { Component, OnInit } from '@angular/core';
import { matchesTab } from 'src/app/shared/data';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  x : any = 120;

allMatches = matchesTab;
  constructor() { }

  ngOnInit(): void {
  }

}
