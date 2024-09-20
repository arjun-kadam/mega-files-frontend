import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PrimeNgModule } from 'src/PrimeNgModule';
import { HttpClientModule } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { BlockedUserComponent } from './components/user/blocked-user/blocked-user.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { UserFilesComponent } from './components/user/user-files/user-files.component';
import { FileSizePipe } from './pipes/file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    UserHomeComponent,
    BlockedUserComponent,
    AdminDashboardComponent,
    PageNotFoundComponent,
    UserFilesComponent,
    FileSizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PrimeNgModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
