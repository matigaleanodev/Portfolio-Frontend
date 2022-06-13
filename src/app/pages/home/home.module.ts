import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SubtitleComponent } from 'src/app/components/subtitle/subtitle.component';
import { ProfilePictureComponent } from 'src/app/components/profile-picture/profile-picture.component';



@NgModule({
  declarations: [
    HomeComponent,
    SubtitleComponent,
    ProfilePictureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
