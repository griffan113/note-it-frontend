import { NgModule } from '@angular/core';
import { RouterModule as Router, Routes } from '@angular/router';
import { AuthenticationComponent } from 'src/app/layouts/authentication/authentication.component';
import { LoginComponent } from 'src/app/layouts/authentication/components/login/login.component';
import { RegisterComponent } from 'src/app/layouts/authentication/components/register/register.component';
import { HomeComponent } from 'src/app/layouts/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [Router.forRoot(routes)],
  exports: [Router],
})
export class AppRouterModule {}
