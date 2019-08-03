import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SitesFilterPipe } from './administration/sites-control/sites-filter.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductComponentComponent,
    ProductsFilterPipe,
    SitesFilterPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
