import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../auth/storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  private readonly BASE_URL = 'https://megashare-spring.azurewebsites.net/api/user';

  ngOnInit(){
    this.getAllFiles()
  }

  getAllFiles(): Observable<any> {
    const token = this.storageService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Set the Authorization header
    });
    return this.http.get(`${this.BASE_URL}/all-files`, { headers });
  }
}
