import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataForm } from 'src/app/models/dataForm.model';
import { ImageService } from 'src/app/services/data-services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {


  @Output() dataChange = new EventEmitter<DataForm>();
  @Output() cancelEdit = new EventEmitter<void>();
  @Input() formLabels: string[] = ['institution', 'title'];
  @Input() data = new DataForm()

  datepipe: DatePipe = new DatePipe('en-US');
  file: any;
  preview: string = '';
  form: FormGroup;
  imgName: string = '';
  API_URL = environment.API_URL;

  constructor(private fb: FormBuilder, private imgService: ImageService) {
    this.form = this.fb.group({
      institution: [this.data.institution, Validators.required],
      title: [this.data.title, Validators.required],
      startDate: [this.data.startDate, Validators.required],
      endDate: [this.data.endDate, Validators.required],
      actual: [this.data.actual, Validators.required],
      description: [this.data.institution, Validators.required],
    });
  }

  ngOnInit(): void {
    this.imgName = this.data.image!;
    this.data.startDate = this.datepipe.transform(this.data.startDate, 'yyyy-MM-dd')!
    if (!this.data.actual)this.data.endDate = this.datepipe.transform(this.data.endDate, 'yyyy-MM-dd')!
  }

  onFileChange(event: Event): any {
    const target = event.target as HTMLInputElement;
    const file = target.files?.length ? target.files[0] : null;
    if (file) {
      this.file = file;
      this.imgService.getBase64(file).then((base64) => {
        this.preview = base64;
      });
    } else {
      this.file = null;
    }
  }

  uploadImage(): void {
    const file = new FormData();
    file.append('file', this.file, this.file.name);
    this.imgService.postImage(file).subscribe((res: any) => {
      console.log(res);
    });
  }

  onSubmit(event: Event): void {
    try {
      event.preventDefault();
      this.data = this.form.value;
      this.file !== undefined
        ? (this.data.image = this.file.name) && this.uploadImage()
        : (this.data.image = this.imgName);
      this.dataChange.emit(this.data);
      this.form.reset();
      this.preview = '';
    } catch (error) {
      console.log(error);
    }
  }
}
