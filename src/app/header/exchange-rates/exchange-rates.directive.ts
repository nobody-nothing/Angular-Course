import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appExchangeRates]'
})
export class ExchangeRatesDirective {

  @Input('appExchangeRatesFrom')
  public rates: any[];
  public context: any | null = null;
  public index: number = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    ) {}

  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      }
    };

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }

  public next(): void {
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.index.$implicit = this.rates[this.index];
  }

  public prev(): void {
    this.index--;

    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.index.$implicit = this.rates[this.index];
  }
}
