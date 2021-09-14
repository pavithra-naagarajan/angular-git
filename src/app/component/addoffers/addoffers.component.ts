import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-addoffers',
  templateUrl: './addoffers.component.html',
  styleUrls: ['./addoffers.component.css']
})
export class AddoffersComponent implements OnInit {

  constructor(public activatedRoute :ActivatedRoute,public formBuilder:FormBuilder, public router: Router,public offerSerivce:OfferService) { }
  addOfferForm?:FormGroup

  
 
  ngOnInit(): void {

    this.addOfferForm=this.formBuilder.group({
      roomType: ['', [Validators.required]],
      offerName: ['', [Validators.required]],
      offerFromDate: ['', [Validators.required]],
      offerToDate: ['', [Validators.required]],
      offerDetails: ['', [Validators.required]],
      termsAndConditions: ['', [Validators.required]],
      discountPercentage: ['', [Validators.required]],
      
      
    })
  }

}
