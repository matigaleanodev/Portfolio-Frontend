import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ProfilePanelComponent } from './components/profile-panel/profile-panel.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { DashboardTitleComponent } from './components/dashboard-title/dashboard-title.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InboxComponent,
    UserRegisterComponent,
    ContactCardComponent,
    ProfilePanelComponent,
    ProfileFormComponent,
    DashboardTitleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
