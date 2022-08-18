import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingListPresentationComponent } from './staffing-list-presentation.component';

describe('StaffingListPresentationComponent', () => {
  let component: StaffingListPresentationComponent;
  let fixture: ComponentFixture<StaffingListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffingListPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffingListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
