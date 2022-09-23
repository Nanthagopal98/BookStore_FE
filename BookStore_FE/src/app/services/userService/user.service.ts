import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpServise : HttpService) { }

  registerUser(reqData : any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpServise.postService('User/Register', reqData, false, header);
  }

  loginUser(reqData : any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpServise.postService('User/Login',reqData,false && header);
  }

  forgot(reqData :any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
    })
  }
  return this.httpServise.postService('User/Forget?email='+ reqData.email, {}, false && header);
  }

}
