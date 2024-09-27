import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Role, Status } from 'src/app/constant/constants';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/auth/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  login(): void {
    console.log('Login Form: ' + this.loginForm.invalid);

    if (this.loginForm.invalid) {
      this.messageService.add({
        key: 'invalidForm',
        severity: 'warn',
        summary: 'Warning',
        detail: 'Invalid Data !!!',
      });
      return;
    }

    const loginRequest = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authService.userLogin(loginRequest).subscribe({
      next: (response) => {
        this.storageService.saveToken(response.token);
        this.storageService.saveProfileUrl(response.profilePictureUrl);
        this.storageService.saveUser({
          roles: response.roles,
          status: response.status,
        });
        console.log('Data Saved');
        this.handleNavigation();
      },
      error: (err) => {
        console.error('Login error:', err);
        this.messageService.add({
          key: 'loginError',
          severity: 'error',
          summary: 'Login Failed',
          detail: 'Incorrect email or password',
        });
      },
    });
  }
  private handleNavigation(): void {
    console.log('Into Navigation');

    const role = this.storageService.getUserRole();
    const status = this.storageService.getUserStatus();

    console.log('Role:', role);
    console.log('Status:', status);

    if (role === Role.ADMIN) {
      this.messageService.add({
        key: 'admin',
        severity: 'success',
        summary: 'Success',
        detail: 'Admin Login Success !!!',
      });
      setTimeout(() => {
        this.router.navigateByUrl('/admin/dashboard');
      }, 3000);
    } else if (role === Role.USER) {

      this.messageService.add({
        key: 'user',
        severity: 'success',
        summary: 'Success',
        detail: 'User Login Success !!! Redirecting in 3 Seconds',
      });

      if (status === Status.BLOCKED) {
        setTimeout(() => {
          this.router.navigateByUrl('/blocked');
        }, 3000);
      } else if (status === Status.ACTIVE) {
        setTimeout(() => {
          this.router.navigateByUrl('/user/home');
        }, 3000);
      }
    }
  }
}
