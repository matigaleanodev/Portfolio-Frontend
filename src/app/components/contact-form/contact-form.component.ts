import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contact!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.contact = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.contact.valid) {
      console.log(this.contact.value)
    } else {
      alert('Complete todos los campos');
      console.log('Form is not valid')
    }
  }

}
