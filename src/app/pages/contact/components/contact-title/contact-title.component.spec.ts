import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTitleComponent } from './contact-title.component';

describe('ContactTitleComponent', () => {
  let component: ContactTitleComponent;
  let fixture: ComponentFixture<ContactTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
