import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/data-services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  profile!: Profile;
  showRegister: boolean = false;
  showProfile: boolean = false;
  constructor(private profService: ProfileService) {}

  ngOnInit(): void {
    this.getData();
    this.profService.Refreshrequired.subscribe(() => {
      this.getData();
    });
  }

  onRegister(){
    return this.showRegister = !this.showRegister;
  }

  onProfile(){
    return this.showProfile = !this.showProfile;
  }

  getData(): void {
    this.profService.getProfile().subscribe((data: Profile[]) => {
      this.profile = data[0];
    });
  }

  onEditProfile(data: FormData): void {
    this.profService.putProfile(data).subscribe((res) => {
      console.log(res);
    });
  }
}
