import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ViewportScroller } from '@angular/common';

import { environment } from 'src/environments/environment';
import { Profile } from 'src/app/models/profile.interface';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ProfileService } from 'src/app/services/data-services/profile.service';
import { ImageService } from 'src/app/services/data-services/image.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile!: Profile;
  onLogin: boolean = false;
  editMode: boolean = false;
  file: any;
  preview: string = '';
  form!: FormGroup;
  API_URL = environment.API_URL;
  profilePic: string = this.API_URL + '/api/image/profilePicture.jpg';

  constructor(
    private viewportScroller: ViewportScroller,
    private authService: AuthService,
    private profService: ProfileService,
    private imgService: ImageService,
    private fb: FormBuilder
  ) {
    this.authService.isLoggedIn().subscribe((res) => {
      this.onLogin = res;
    });
    this.form = this.fb.group({
      description: [''],
    });
  }

  ngOnInit(): void {
    this.getData();
    this.profService.Refreshrequired.subscribe(() => {
      this.getData();
    });
  }

  getData(): void {
    this.profService.getProfile().subscribe((data: Profile[]) => {
      this.profile = data[0];
    });
  }

  onClick(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }

  onEdit(): void {
    this.editMode = !this.editMode;
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
    file.append('file', this.file, this.profile.image);
    this.imgService.deleteImage(this.profile.image).subscribe((res: any) => {
      console.log(res);
    });    
    this.imgService.postImage(file).subscribe((res: any) => {
      console.log(res);
    });
  }

  onSubmit(event: Event): void {
    let formData = new FormData();
    try {
      event.preventDefault();
      this.uploadImage();
      formData.append('id', this.profile.id.toString());
      formData.append('name', this.profile.name);
      formData.append('subtitle', this.profile.subtitle);
      formData.append('adress', this.profile.adress);
      formData.append('description', this.form.value.description);
      formData.append('image', this.profile.image);
      this.profService.putProfile(formData).subscribe((res: any) => {
        console.log(res);
        this.editMode = false;
      });
    } catch (error) {
      console.log(error);
    }
  }
}
