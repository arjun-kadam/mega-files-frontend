import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL="http://localhost:8080/api/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userSignup(signUpRequest:any):Observable<any>{

    // const tempData={...signUpRequest}
    // delete signUpRequest.confirm_password;
    return this.http.post(`${BASE_URL}/signup`,signUpRequest);
  }


  userLogin(loginRequest:any):Observable<any>{
    return this.http.post(`${BASE_URL}/signin`,loginRequest)
  }


}
