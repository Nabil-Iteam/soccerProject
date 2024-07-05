import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamURL : string = "http://localhost:8090/api/teams"
  constructor(private httpClient : HttpClient) { }

  getAllTeams(){
    return this.httpClient.get(this.teamURL)
  }

  addTeam(teamObj:any){
    return this.httpClient.post(this.teamURL,teamObj)
  }

  updateTeam(teamObj:any){
    return this.httpClient.put(this.teamURL,teamObj)
  }

  getTeamById(id:number){
    return this.httpClient.get(this.teamURL+id)
  }

  deleteTeamById(id : number){
    return this.httpClient.delete(this.teamURL+id)
  }
}
