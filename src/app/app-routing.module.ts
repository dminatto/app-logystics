import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: '', redirectTo:'/index', pathMatch: 'full' },
  {path: 'intranet/login', component: LoginUserComponent},
  {path: 'login', component: LoginCustomerComponent},
  {path: 'error-page', component: ErrorPageComponent},
  {path: 'em-construcao', component: UnderConstructionComponent},
  {path: 'intranet', component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
