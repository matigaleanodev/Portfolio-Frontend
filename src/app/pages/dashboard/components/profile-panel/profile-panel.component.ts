import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
})
export class ProfilePanelComponent implements OnInit {
  @Input() data!: Profile;
  @Output() onEditProfile = new EventEmitter<FormData>();
  editProfile: boolean = false;
  API_URL = environment.API_URL;
  img: string = this.API_URL + '/api/image/profilePicture.jpg';

  constructor() {}

  ngOnInit(): void {}

  onEdit(): boolean {
    this.editProfile = !this.editProfile;
    return this.editProfile;
  }

  onSubmit(data: Profile): void {
    let formData = new FormData();
      data.id !== this.data.id ? data.id = this.data.id : data.id;      
      data.image === undefined ? (data.image = this.data.image) : data.image;
      formData.append('id', data.id.toString());
      formData.append('name', data.name);
      formData.append('subtitle', data.subtitle);
      formData.append('adress', data.adress);
      formData.append('description', data.description);
      formData.append('image', data.image);
      this.onEditProfile.emit(formData);
      this.editProfile = false;
  }
}
