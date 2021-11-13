import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { AppRouterModule } from 'src/app/shared/routes/router.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AppRouterModule],
})
export class HomeModule {}
