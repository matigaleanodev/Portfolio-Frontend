import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SubtitleComponent } from '../../components/subtitle/subtitle.component';



@NgModule({
  declarations: [
    HomeComponent,
    SubtitleComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
