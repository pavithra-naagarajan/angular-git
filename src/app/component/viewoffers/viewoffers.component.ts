import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-viewoffers',
  templateUrl: './viewoffers.component.html',
  styleUrls: ['./viewoffers.component.css']
})
export class ViewoffersComponent implements OnInit {

  
  constructor(public offerService:OfferService) { }
  
  errorMessage?:string;
  offer:Offer[]=[];

  ngOnInit(): void {
    this.refreshOffer()
  }

  refreshOffer()
  {
    this.offerService.getOffers().subscribe((data:any[])=>{
      console.log("####Getting all offers from DB through Spring..")
      console.log(data);
      this.offer=data;
    },err=>this.errorMessage=err)
  }

}
