import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
token = localStorage.getItem('token');
  constructor(private httpService : HttpService) { }

  getallbooks(){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    console.log(this.token);
    return this.httpService.getService('Book/GetAllBooks',true, header);
  }
}
