import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
token = localStorage.getItem('token')
  constructor(private httpService : HttpService) { }

  getOrder(){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('Order/getOrder', true, header);
  }
}