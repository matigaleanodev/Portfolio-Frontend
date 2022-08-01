import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/data-services/profile.service';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
})
export class ProfilePanelComponent implements OnInit {
  profile!: Profile;  
  editProfile: boolean = true;

  constructor(private profService: ProfileService) {}

  ngOnInit(): void {
    this.getData();
    this.profService.Refreshrequired.subscribe(() => {
      this.getData();
      console.log(this.profile);
    });
  }  

  onEdit(): boolean {
    this.editProfile = !this.editProfile;
    return this.editProfile;
  }

  getData(): void {
    this.profService.getProfile().subscribe((data: Profile[]) => {
      console.log(data);
      this.profile = data[0];
    });
  }

  onSubmit(data: Profile): void {
    console.log(data);
    this.profService.putProfile(data).subscribe((res) => {
      console.log(res);
    });
    this.editProfile = false;
  }
}
