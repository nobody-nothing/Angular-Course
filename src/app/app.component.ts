import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatCheckboxChange, MatSidenav} from '@angular/material';
import {Promise} from 'q';
import {IProduct, products$} from './mock';
import {Observable, Subject, Subscription} from 'rxjs';
import {Unsubscriber} from './unsubscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Unsubscriber implements OnInit, OnDestroy {
  public title = 'Angular App';
  public drawer: MatSidenav;
  public products$: Observable<IProduct[]> = products$;
  public products: IProduct[] = [];
  public onlyFavourites: boolean;

  public ngOnInit(): void {
  }

/*
  public setSidenav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }
*/

  public search(ev: Event): void {
    const el: HTMLInputElement = (ev.target as HTMLInputElement)
    this.searchTerm = el.value;
  }

  public trackByFn(index: number, item: IProduct): number {
    return item.id;
  }

  public toggleFavourites(ev: MatCheckboxChange): void {
    this.onlyFavourites = ev.checked;
  }
}

