import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddoffersComponent } from './component/addoffers/addoffers.component';
import { ViewoffersComponent } from './component/viewoffers/viewoffers.component';

const routes: Routes = [
  {path:'showoffers',component:ViewoffersComponent},
  {path:'addoffers',component:AddoffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
