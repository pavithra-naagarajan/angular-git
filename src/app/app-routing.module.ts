import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddoffersComponent } from './component/addoffers/addoffers.component';
import { OfferoperationsComponent } from './component/offeroperations/offeroperations.component';
import { OffersComponent } from './component/offers/offers.component';
import { UpdateoffersComponent } from './component/updateoffers/updateoffers.component';
import { ViewoffersComponent } from './component/viewoffers/viewoffers.component';

const routes: Routes = [
  {path:'showoffers',component:ViewoffersComponent},
  {path:'addoffers',component:AddoffersComponent},
  {path:'updateoffers/:offerId',component:UpdateoffersComponent},
  {path:'searchoffer',component:OfferoperationsComponent},
  {path:'',component:OffersComponent},
  {path:'offeroperations',component:OfferoperationsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
