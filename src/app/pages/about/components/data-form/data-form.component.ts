import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Education } from 'src/app/models/education.interface';
import { Work } from 'src/app/models/works.interface';
import { ImageService } from 'src/app/services/data-services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  @Output() dataChange = new EventEmitter<Education | Work>();
  @Output() cancelEdit = new EventEmitter<void>();
  @Input() formLabels: string[] = ['institution', 'title'];
  @Input() data: Work | Education = {
    id : 0,
    institution: '',
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    actual: false,
    description: '',
    image: '',
  }
  file: any;
  preview: string = '';
  form!: FormGroup;
  imgName: string = '';
  API_URL = environment.API_URL;

  constructor(private fb: FormBuilder, private imgService: ImageService) {
    this.form = this.fb.group({
      institution: ['', Validators.required],
      title: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      actual: [false, Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.imgName = this.data.image;
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
