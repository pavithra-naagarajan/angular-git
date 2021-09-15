import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { min } from 'rxjs/operators';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-addoeffers',
  templateUrl: './addoffers.component.html',
  styleUrls: ['./addoffers.component.css']
})
export class AddoffersComponent implements OnInit {

  constructor(public activatedRoute :ActivatedRoute,public formBuilder:FormBuilder, public router: Router,public offerSerivce:OfferService) { }
  
  addOfferForm?:FormGroup
  errorMessage?:string;
  offer?:Offer;
  discountValue=0;
  ngOnInit(): void {

      this.addOfferForm=this.formBuilder.group({
      roomType: ['', [Validators.required]],
      offerName: ['', [Validators.required]],
      offerFromDate: ['', [Validators.required]],
      offerToDate: ['', [Validators.required]],
      offerDetails: ['', [Validators.required]],
      termsAndConditions: ['', [Validators.required]],
      discountPercentage: ['', [Validators.required,Validators.min(0)]],
    })
  }

  addOffer()
  {
    window.alert("Offer Added Successfully!!")
    this.offerSerivce.addOffer(this.addOfferForm?.value)
    .subscribe(
      res=>{
        console.log(res);
        console.log("#####Offer Added Successfully!");
        this.router.navigate(['showoffer'])
      },
      error=>
     {
        console.log("Error in save: "+error)
     }
    )
  }
  
}
