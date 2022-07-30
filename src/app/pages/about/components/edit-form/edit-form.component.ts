import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Education } from 'src/app/models/education.interface';
import { Work } from 'src/app/models/works.interface';
import { ImageService } from 'src/app/services/data-services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  @Output() dataChange = new EventEmitter<Education | Work>();
  @Input() formLabels: string[] = ['institution', 'title'];
  @Input() data: Work | Education = {
    id: 0,
    institution: '',
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    actual: false,
    description: '',
    image: '',
  };
  file: any;
  preview: string = '';
  form!: FormGroup;
  API_URL = environment.API_URL;

  constructor(private fb: FormBuilder, private imgService: ImageService) {
    this.form = this.fb.group({
      institution: ['', Validators.required],
      title: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      actual: [false, Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onFileChange(event: Event): any {
    const target = event.target as HTMLInputElement;
    const file = target.files?.length ? target.files[0] : null;
    if (file) {
      this.file = file;
      this.getBase64(file).then((base64) => {
        this.preview = base64;
      });
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
      this.data.image = this.file.name;
      this.dataChange.emit(this.data);
      this.uploadImage();
      this.form.reset();
      this.preview = '';
    } catch (error) {
      console.log(error);
    }
  }

}
