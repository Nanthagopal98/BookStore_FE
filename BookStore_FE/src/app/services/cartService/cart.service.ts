import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token = localStorage.getItem('token');
  constructor(private httpservice :HttpService) { }

  addToCart(reqData : any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.postAuthorised('Cart/AddToCart',reqData,true, header);
  }
}
