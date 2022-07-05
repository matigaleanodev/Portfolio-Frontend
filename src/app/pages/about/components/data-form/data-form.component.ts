import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Education } from 'src/app/models/education.interface';
import { Work } from 'src/app/models/works.interface';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  @Input() formLabels: string[] = ['institution', 'title'];
  files: any = [];
  data!: Work | Education;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      institution: ['', Validators.required],
      title: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      actual: [Boolean, Validators.required],
      logo: [null, Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onFileChange(event: Event): any {
    const target = event.target as HTMLInputElement;
    const file = target.files?.length ? target.files[0] : null;
    if (file) {
      this.files.push(file);
    }
  }

  onSubmit(event: Event): void {
    let logo = this.form.value.logo;
    console.log(logo);
  }
}
