import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthComponent } from './layout/auth.component';
import { AuthRoutingModule } from './routes/auth-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule],
  exports: [AuthRoutingModule],
})
export class AuthModule {}
