import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InboxComponent,
    UserRegisterComponent,
    ContactCardComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, DashboardRoutingModule],
})
export class DashboardModule {}
