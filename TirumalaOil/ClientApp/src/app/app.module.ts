import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './salesModule/home/home.component';
import { PricelistComponent } from './salesModule/pricelist/pricelist.component';
import { SalesquantityComponent } from './salesModule/salesquantity/salesquantity.component';
import { SalesvalueComponent } from './salesModule/salesvalue/salesvalue.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PricelistComponent,
    SalesquantityComponent,
    SalesvalueComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'pricelist', component: PricelistComponent, pathMatch: 'full' },
      { path: 'salesquantity', component: SalesquantityComponent, pathMatch: 'full' },
      { path: 'salesvalue', component: SalesvalueComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
