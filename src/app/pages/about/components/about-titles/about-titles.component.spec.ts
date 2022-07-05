import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTitlesComponent } from './about-titles.component';

describe('AboutTitlesComponent', () => {
  let component: AboutTitlesComponent;
  let fixture: ComponentFixture<AboutTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutTitlesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
