import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../auth/storage.service';
import { BASE_URL } from 'src/app/constant/api';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {


  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  private createAuthHeaders(): HttpHeaders {
    const token = this.storageService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getAllFiles(): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.get(`${BASE_URL}/user/all-files`, { headers });
  }

  uploadFile(file: File, visibility: string): Observable<any> {
    const headers = this.createAuthHeaders();
    const formData: FormData = new FormData();
    formData.append('file', file, file.name); 
    formData.append('status', visibility);
    return this.http.post(`${BASE_URL}/user/upload`, formData, { headers });
  }

  getGlobalFiles(): Observable<any>{
    const headers = this.createAuthHeaders();
    return this.http.get(`${BASE_URL}/user/public-files`,{headers})
  }

  deleteFile(fileId:number):Observable<any>{
    const headers = this.createAuthHeaders();
    return this.http.delete(`${BASE_URL}/user/file/${fileId}`,{headers,responseType:'text'});
  }

  changeFileAccess(status:string,fileId:number):Observable<any>{
    const headers = this.createAuthHeaders();
    const formData: FormData = new FormData();
    formData.append('status', status);
    return this.http.put(`${BASE_URL}/user/change-access/${fileId}`,formData,{headers,responseType:'text'})
  }
}
