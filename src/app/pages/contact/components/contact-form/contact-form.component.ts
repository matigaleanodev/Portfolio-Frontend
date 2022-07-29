import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/data-services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contact!: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contact = this.fb.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.contact.valid) {
      const contact: Contact = {
        id: 0,
        name: this.contact.value.name,
        mail: this.contact.value.mail,
        message: this.contact.value.message,
      };
      this.contactService.postContact(contact).subscribe(
        res => {
          console.log(res);
          this.contact.reset();
        }
      );
      alert('Mensaje enviado, muchas gracias!');
    } else {
      alert('Complete todos los campos');
      console.log('Form is not valid');
    }
  }
}
