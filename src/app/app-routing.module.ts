import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddoffersComponent } from './component/addoffers/addoffers.component';
import { OffersComponent } from './component/offers/offers.component';
import { ViewoffersComponent } from './component/viewoffers/viewoffers.component';

const routes: Routes = [
  {path:'showoffers',component:ViewoffersComponent},
  {path:'addoffers',component:AddoffersComponent},
  {path:'offers',component:OffersComponent},
  {path:'',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
