import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseurl;
  constructor(private httpclient: HttpClient) { }

  postService(url : string, reqData : any, token : boolean = false, httpOptions:any ={}) {
    return this.httpclient.post(this.baseurl+url, reqData, token && httpOptions);
  }
}
