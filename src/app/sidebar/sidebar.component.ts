import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @Output()
  public setSidenavControl = new EventEmitter();

  @ViewChild('drawer', {static: true})
  public drawer: MatSidenav;

  constructor() { }

  ngOnInit() {
  this.setSidenavControl.emit(this.drawer);
  }
}
/* @ViewChild('content', {read: ViewContainerRef, static: false})
  public container: ViewContainerRef;

  @ContentChild('content', {read: TemplateRef, static: false})
  public template: TemplateRef<any>;

  ngAfterContentInit(): void {
    console.log(this.template);
  }

  ngAfterViewInit(): void {
    this.container.createEmbeddedView(this.template);
    console.log(this.container);*/

