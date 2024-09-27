import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { BlockedUserComponent } from './components/user/blocked-user/blocked-user.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { adminGuard, userGuard } from './guards/auth.guard';
import { UserFilesComponent } from './components/user/user-files/user-files.component';
import { UploadFilesComponent } from './components/user/upload-files/upload-files.component';
import { GlobalFilesComponent } from './components/user/global-files/global-files.component';



const routes: Routes = [
 {path:'login', component:LoginComponent},
 {path:'signup', component:SignupComponent},
 {path:'admin/dashboard', component:AdminDashboardComponent,canActivate:[adminGuard]},
 {path:'user/home', component:UserHomeComponent,canActivate:[userGuard]},
 {path:'user/my-files', component:UserFilesComponent,canActivate:[userGuard]},
 {path:'user/global-files', component:GlobalFilesComponent,canActivate:[userGuard]},
 {path:'user/upload-new', component:UploadFilesComponent,canActivate:[userGuard]},
 {path:'blocked', component:BlockedUserComponent,canActivate:[userGuard]},
 {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
