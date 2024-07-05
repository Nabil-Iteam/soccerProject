import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL : string = "http://localhost:8090/api/players"
  constructor(private httpClient : HttpClient) { }

  getAllPlayers(){
    return this.httpClient.get(this.playerURL)
  }

  addPlayer(playerObj:any){
    return this.httpClient.post(this.playerURL,playerObj)
  }

  updatePlayer(playerObj:any){
    return this.httpClient.put(this.playerURL,playerObj)
  }

  getPlayerById(id:number){
    return this.httpClient.get(this.playerURL+id)
  }

  deletePlayerById(id : number){
    return this.httpClient.delete(this.playerURL+id)
  }
}
