import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/constant/api';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userSignup(signUpRequest:any):Observable<any>{

    // const tempData={...signUpRequest}
    // delete signUpRequest.confirm_password;
    return this.http.post(`${BASE_URL}/auth/signup`,signUpRequest);
  }


  userLogin(loginRequest:any):Observable<any>{
    return this.http.post(`${BASE_URL}/auth/signin`,loginRequest)
  }


}
