import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
token = localStorage.getItem('token')
  constructor(private httpService :HttpService) { }

  addFeedback(reqData : any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postAuthorised('FeedBack/AddFeedBack', reqData, true, header);
  }

  getFeedback(bookId : any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getFeedbackService('FeedBack/GetAllFeedback?bookId='+bookId, true, header);
  }
}
