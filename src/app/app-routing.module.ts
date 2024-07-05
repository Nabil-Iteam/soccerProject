import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './composants/contact/contact.component';
import { SignupComponent } from './composants/signup/signup.component';
import { HomeComponent } from './composants/home/home.component';
import { LoginComponent } from './composants/login/login.component';
import { MatchesComponent } from './composants/matches/matches.component';
import { AddPlayerComponent } from './composants/add-player/add-player.component';
import { AddMatchComponent } from './composants/add-match/add-match.component';
import { AddTeamComponent } from './composants/add-team/add-team.component';
import { AdminComponent } from './composants/admin/admin.component';
import { MatchInfoComponent } from './composants/match-info/match-info.component';

const routes: Routes = [
  {path:"contact",component: ContactComponent} ,
  {path:"",component: HomeComponent} ,
  {path:"signup" ,component: SignupComponent},
  {path:"login",component: LoginComponent} ,
  {path:"matches",component: MatchesComponent} ,
  {path:"addPlayer",component: AddPlayerComponent} ,
  {path:"addMatch",component: AddMatchComponent} ,
  {path:"addTeam",component: AddTeamComponent} ,
  {path:"admin",component: AdminComponent} ,
  {path:"matchInfo/:id",component: MatchInfoComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
