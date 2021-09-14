import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Offer } from '../model/offer';
const offerUrl="http://localhost:9003/hoteloffer"
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(public http:HttpClient) { }

    // Http Headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  
    //to get all the offers
    //http://localhost:9003/hoteloffer
    getOffers():Observable<Offer[]>
    {
        return this.http.get<Offer[]>(offerUrl)
        .pipe(
         retry(1),
         catchError(this.errorHandler)
        )
    }
    
    errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
  

}
