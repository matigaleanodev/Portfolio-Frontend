import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HskillFormComponent } from './hskill-form.component';

describe('HskillFormComponent', () => {
  let component: HskillFormComponent;
  let fixture: ComponentFixture<HskillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HskillFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HskillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
