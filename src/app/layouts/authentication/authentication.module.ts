import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRouterModule } from 'src/app/shared/routes/router.module';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
})
export class AuthenticationModule {}
