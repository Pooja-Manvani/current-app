import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingFormContainerComponent } from './staffing-form-container.component';

describe('StaffingFormContainerComponent', () => {
  let component: StaffingFormContainerComponent;
  let fixture: ComponentFixture<StaffingFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffingFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffingFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
