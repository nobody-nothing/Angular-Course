import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../mock';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  @Input()
  public product: IProduct

  @Input()
  public isOdd: boolean

  constructor() { }

  ngOnInit() {
  }

}
