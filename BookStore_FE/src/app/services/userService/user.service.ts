import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
token = localStorage.getItem('token');
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

  reset(reqData:any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpServise.postAuthorised('User/Reset?password='+reqData.password+'&confirmPassword='+reqData.confirmPassword,{}, true , header);
  }

}
