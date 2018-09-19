import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { GamePageComponent } from './game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
