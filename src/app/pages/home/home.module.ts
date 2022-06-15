import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';
import { ProfileComponent } from '../../components/profile/profile.component';



@NgModule({
  declarations: [
    HomeComponent,
    SubtitleComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
