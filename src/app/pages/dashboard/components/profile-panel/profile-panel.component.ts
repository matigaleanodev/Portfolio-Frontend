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
  @Output() onEditProfile = new EventEmitter<Profile>();
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
    if (data !== undefined) {
      data.id = this.data.id;
      data.image === undefined || 'undefined'
        ? (data.image = this.data.image)
        : data.image;
        console.log(data);
      this.onEditProfile.emit(data);
      this.editProfile = false;
    } else {
      this.editProfile = false;
    }
  }
}
