import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RegisterComponent } from '../app/components/register/register.component';
import { AuthGuard } from './services/auth/auth-guard';

const routes: Routes = [
  // { path: 'index', component: HomeComponent },
  // { path: '', component: HomeComponent }, //This will make the home component as default first loading component via <router-outlet>
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: RegisterComponent },
  { path: '', component: RegisterComponent }, //This will make the register component as default first loading component via <router-outlet>
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'manage-user', component: ManageUserComponent, canActivate: [AuthGuard] },
  // { path: 'manage-product', component: ProductsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }