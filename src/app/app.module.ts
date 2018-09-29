import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GamePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
