import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { GamePageComponent } from './game-page/game-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StartPageComponent,
  },
  {
    path: 'game',
    component: GamePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
