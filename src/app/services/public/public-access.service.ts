import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/constant/api';



@Injectable({
  providedIn: 'root'
})
export class PublicAccessService {

  constructor(private http:HttpClient) { }


  getLatestFiles(): Observable<any>{
   return this.http.get(`${BASE_URL}/home/latest-files`);
  }

  getPopularFiles():Observable<any>{
    return this.http.get(`${BASE_URL}/home/popular-files`);
  }

  incrementDownloadCount(id:number):Observable<any>{
    return this.http.get(`${BASE_URL}/home/download/${id}`,{})
  }


}
