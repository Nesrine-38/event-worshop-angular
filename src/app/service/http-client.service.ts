import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum HttpMethod
{
  
  GET,POST,PUT,DELETE

}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  
  get headers():HttpHeaders{ 
      
    let token = localStorage.getItem('token')
    
    return new HttpHeaders({
      "authorization":`Bearer ${token}`
    })
    
  }

  sendRequest(url:string,{ method = HttpMethod.GET,useToken = false, data = {} } = {} ):Observable<any>
  {
    
    switch(method)
    {
      case HttpMethod.GET:
      {
        return this.httpClient.get<any>(url,{headers:useToken ? this.headers : {},observe:'response'})
      }
      case HttpMethod.POST:
      {
        return this.httpClient.post<any>(url,data,{headers:useToken ? this.headers : {},observe:'response'})
      }
      case HttpMethod.PUT:
      {
        return this.httpClient.put<any>(url,data,{headers:useToken ? this.headers : {},observe:'response'})
      }
      case HttpMethod.DELETE:
      {
        return this.httpClient.delete<any>(url,{headers:useToken ? this.headers : {},observe:'response'})
      }
          
    }
   
  }

}
