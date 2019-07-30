import { Component } from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Promise} from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular App';
  public drawer: MatSidenav;

  public setSidenav(drawer: MatSidenav): void {
  Promise.resolve().then(() => this.drawer = drawer);
  }
}

