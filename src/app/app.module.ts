import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewoffersComponent } from './component/viewoffers/viewoffers.component';
import { AddoffersComponent } from './component/addoffers/addoffers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Offer } from './model/offer';
import { OffersComponent } from './component/offers/offers.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ViewoffersComponent,
    AddoffersComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public router:Router)
  {

  }
  offers()
  {
    this.router.navigate(['offers']);
  }
 }
