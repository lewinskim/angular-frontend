import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SecondAuthGuard } from './auth/second-auth.guard';
import { LoginComponent } from './login/login.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { ConfidentialComponent } from './confidential/confidential.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'afterlogin', component: AfterloginComponent, canActivate: [AuthGuard] },
  { path: 'confidential', component: ConfidentialComponent, canActivate: [SecondAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
