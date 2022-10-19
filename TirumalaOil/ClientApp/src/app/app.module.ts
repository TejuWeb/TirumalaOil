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
import { SidenavComponent } from './sidenav/sidenav.component';
import { MastersetupComponent } from './manufacturingModule/mastersetup/mastersetup.component';
import { FgstockrateComponent } from './manufacturingModule/fgstockrate/fgstockrate.component';
import { FgstockquantityComponent } from './manufacturingModule/fgstockquantity/fgstockquantity.component';
import { FgstockvalueComponent } from './manufacturingModule/fgstockvalue/fgstockvalue.component';
import { MfgquantityComponent } from './manufacturingModule/mfgquantity/mfgquantity.component';
import { LabourComponent } from './manufacturingModule/labour/labour.component';
import { ElectricityComponent } from './manufacturingModule/electricity/electricity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PricelistComponent,
    SalesquantityComponent,
    SalesvalueComponent,
    SidenavComponent,
    MastersetupComponent,
    FgstockrateComponent,
    FgstockquantityComponent,
    FgstockvalueComponent,
    MfgquantityComponent,
    LabourComponent,
    ElectricityComponent,
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
      { path: 'mfgmastersetup', component: MastersetupComponent, pathMatch: 'full' },
      { path: 'mfgstockrate', component: FgstockrateComponent, pathMatch: 'full' },
      { path: 'mfgstockquantity', component: FgstockquantityComponent, pathMatch: 'full' },
      { path: 'mfgstockvalue', component: FgstockvalueComponent, pathMatch: 'full' },
      { path: 'mfgquantity', component: MfgquantityComponent, pathMatch: 'full' },
      { path: 'mfglabour', component: LabourComponent, pathMatch: 'full' },
      { path: 'mfgelectricity', component: ElectricityComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
