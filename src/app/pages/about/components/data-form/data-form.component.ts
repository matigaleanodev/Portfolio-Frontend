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
  @Output() dataChange = new EventEmitter<Education | Work>();
  file: any;
  data!: Work | Education;
  preview: string = '';
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      institution: ['', Validators.required],
      title: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      actual: [false, Validators.required],
      image: [this.preview, Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onFileChange(event: Event): any {
    const target = event.target as HTMLInputElement;
    const file = target.files?.length ? target.files[0] : null;
    if (file) {
      this.getBase64(file).then((base64) => {
        this.preview = base64;
      }
      );
    } else {
      this.file = null;
    }
  }
  
  getBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  onSubmit(event: Event): void {
    try {
      event.preventDefault();
      this.data = this.form.value;
      console.log(this.data);
      console.log(this.data.image);
      this.dataChange.emit(this.data);
      this.form.reset();
      this.preview = '';
    } catch (error) {
      console.log(error);
    }
  }

  
}

