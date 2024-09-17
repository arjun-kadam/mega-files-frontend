import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService]
 
})
export class SignupComponent {
  signupForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private messageService:MessageService,
    private auth:AuthService,
    private router:Router
  ){
    this.signupForm=this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(6)]],
      confirm_password:[null,[Validators.required,Validators.minLength(6)]]
    })
  }

isPassSame(pass:string,cPass:string):boolean{
  if(pass!==cPass){
    return false;
  }
  return true;
}

  onSubmitForm(){
    const password=this.signupForm.get("password")?.value;
    const confirm_password=this.signupForm.get("conform_password")?.value;
    if(this.isPassSame(password,confirm_password)){
      this.messageService.add({ key: 'passFail', severity: 'warn', summary: 'Warning', detail: 'Password Not Matched !!!' });
      return;
    }
    this.auth.userSignup(this.signupForm.value).subscribe((res)=>{
      if(res.email!=null){
        this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Signup Success' })
        setTimeout(()=>{
          this.router.navigateByUrl("/login")
        },3000)
      }else{
        this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Something Went Wrong !!!' })
      }
    })
    }





}
