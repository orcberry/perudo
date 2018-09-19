import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  template: `
    <p>
      start-page works!
    </p>
    <a class="play-action" routerLink="game">Play</a>
  `,
  styles: []
})
export class StartPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
