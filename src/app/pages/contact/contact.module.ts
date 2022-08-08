import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactTitleComponent } from './components/contact-title/contact-title.component';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent, ContactTitleComponent],
  imports: [CommonModule, ReactiveFormsModule, ContactRoutingModule],
  exports: [ContactComponent],
})
export class ContactModule {}
