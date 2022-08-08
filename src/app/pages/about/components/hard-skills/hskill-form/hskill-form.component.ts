import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HardSkill } from 'src/app/models/skill.interface';
import { ImageService } from 'src/app/services/data-services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hskill-form',
  templateUrl: './hskill-form.component.html',
  styleUrls: ['./hskill-form.component.scss']
})
export class HskillFormComponent implements OnInit {
  @Output() dataChange = new EventEmitter<HardSkill>();
  @Output() cancelEdit = new EventEmitter<void>();
  @Input() data: HardSkill = {
    id: 0,
    name: '',
    url: '',
    type: 'frontend',
    image: '',
  };
  @Input() id!: number;
  file: any;
  preview: string = '';
  form!: FormGroup;
  imgName: string = '';
  API_URL = environment.API_URL;

  constructor(private fb: FormBuilder, private imgService: ImageService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      type: ['', Validators.required],
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
      this.data.id = this.id;
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
