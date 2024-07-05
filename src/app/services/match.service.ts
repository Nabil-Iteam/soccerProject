import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchURL : string = "http://localhost:8090/api/matches"
  constructor(private httpClient : HttpClient) { }

  getAllMatches(){
    return this.httpClient.get(this.matchURL)
  }

  addMatch(matchObj:any){
    return this.httpClient.post(this.matchURL,matchObj)
  }

  updateMatch(matchObj:any){
    return this.httpClient.put(this.matchURL,matchObj)
  }

  getMatchById(id:number){
    return this.httpClient.get(this.matchURL+ "/" +id)
  }

  deleteMatchById(id : number){
    return this.httpClient.delete(this.matchURL+ "/" +id)
  }
}
