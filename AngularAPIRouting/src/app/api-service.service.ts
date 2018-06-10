import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : Http) { }

  private dataHandler(response){
    let data = response._body;
    let status = response.status;
    let dataObj = {data : data , status :status}
    return dataObj;
  }
  getRequest() : Observable<any>{
    return this.http.get("http://localhost:5051").pipe(map(this.dataHandler));
  }

  postRequest(data) : Observable<any>{
    return this.http.post("http://localhost:5051",data).pipe(map(this.dataHandler));
  }

  putRequest(data) : Observable<any>{
    return this.http.put("http://localhost:5051",data).pipe(map(this.dataHandler));
  }

  deleteRequest(data) : Observable<any>{
    let body = JSON.stringify(data);
    let options = new RequestOptions({body : body , method : RequestMethod.Delete});
    return this.http.delete("http://localhost:5051",options).pipe(map(this.dataHandler));
  }

  getRequestWithParameters(paramOne , paramTwo) : Observable<any>{
    return this.http.get(`http://localhost:5051/params/${paramOne}/${paramTwo}`).pipe(map(this.dataHandler));
  }

  postRequestWithParameters(paramOne , paramTwo , data) : Observable<any>{
    return this.http.post(`http://localhost:5051/params/${paramOne}/${paramTwo}`,data).pipe(map(this.dataHandler));
  }

  putRequestWithParameters(paramOne , paramTwo , data) : Observable<any>{
    return this.http.put(`http://localhost:5051/params/${paramOne}/${paramTwo}`,data).pipe(map(this.dataHandler));
  }

  deleteRequestWithParameters(paramOne , paramTwo) : Observable<any>{
    return this.http.delete(`http://localhost:5051/params/${paramOne}/${paramTwo}`).pipe(map(this.dataHandler));
  }
}
