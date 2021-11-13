import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthenticationModule } from '../layouts/authentication/authentication.module';
import { HomeModule } from '../layouts/home/home.module';
import { AppComponent } from './app.component';
import { AppRouterModule } from './routes/router.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, HomeModule, AuthenticationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
