import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit, SimpleChanges, ViewEncapsulation
} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Input()
  public title: string;

  @Input()
  public drawer: MatSidenav;

  public headerTitleColor = this.sanitizer.bypassSecurityTrustStyle('color: orange');

  public rates = [{value: 26.25, currenct: 'USD'}, {value: 30.25, currency: 'EUR'}, {value: 0.42, currency: 'USD'}]

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  public toggleSidenav(): void {
    this.drawer.toggle();
  }
}


/* ngOnInit() {
   console.log('ngOnInit');
 }

 ngAfterViewInit(): void {
   console.log('ngAfterViewInit');
 }

 ngDoCheck(): void {
   console.log('ngDoCheck');
 }

 ngAfterViewChecked(): void {
   console.log('ngAfterViewChecked');
 }

 ngAfterContentInit(): void {
   console.log('ngAfterContentInit');
 }

 ngAfterContentChecked(): void {
   console.log('ngAfterContentChecked');
 }

 ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnChanges: ', changes);
 }*/
