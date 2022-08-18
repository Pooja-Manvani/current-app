import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingFormPresentationComponent } from './staffing-form-presentation.component';

describe('StaffingFormPresentationComponent', () => {
  let component: StaffingFormPresentationComponent;
  let fixture: ComponentFixture<StaffingFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffingFormPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffingFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
