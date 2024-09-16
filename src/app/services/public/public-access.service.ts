import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL="http://localhost:8080/api/home";
@Injectable({
  providedIn: 'root'
})
export class PublicAccessService {

  constructor(private http:HttpClient) { }


  getLatestFiles(): Observable<any>{
   return this.http.get(`${BASE_URL}/latest-files`);
  }

  getPopularFiles():Observable<any>{
    return this.http.get(`${BASE_URL}/popular-files`);
  }

  incrementDownloadCount(id:number):Observable<any>{
    return this.http.get(`${BASE_URL}/download/${id}`,{})
  }


}
