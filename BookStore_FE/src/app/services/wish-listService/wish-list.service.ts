import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  [x: string]: any;
token = localStorage.getItem('token');
  constructor(private httpService : HttpService) { }

  wishListDetails(){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('WishList/GetWishList', true, header);
  }

  deleteItem(bookId:any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.remove('WishList/DeleteWishList?bookId='+bookId, true, header)
  }
}
