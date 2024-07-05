import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HeroComponent } from './composants/hero/hero.component';
import { NextMatchComponent } from './composants/next-match/next-match.component';
import { ScoreComponent } from './composants/score/score.component';
import { BlogComponent } from './composants/blog/blog.component';
import { NewsComponent } from './composants/news/news.component';
import { VideoComponent } from './composants/video/video.component';
import { ContactComponent } from './composants/contact/contact.component';
import { SignupComponent } from './composants/signup/signup.component';
import { LoginComponent } from './composants/login/login.component';
import { MatchesComponent } from './composants/matches/matches.component';
import { AddMatchComponent } from './composants/add-match/add-match.component';
import { AddPlayerComponent } from './composants/add-player/add-player.component';
import { AddTeamComponent } from './composants/add-team/add-team.component';
import { AdminComponent } from './composants/admin/admin.component';
import { MatchesTableComponent } from './composants/matches-table/matches-table.component';
import { PlayersTableComponent } from './composants/players-table/players-table.component';
import { TeamsTableComponent } from './composants/teams-table/teams-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { StarPipe } from './pipes/star.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MatchInfoComponent } from './composants/match-info/match-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    NextMatchComponent,
    ScoreComponent,
    BlogComponent,
    NewsComponent,
    VideoComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    MatchesComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    ReversePipe,
    StarPipe,
    MatchInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
