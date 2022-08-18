import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingListContainerComponent } from './staffing-list-container.component';

describe('StaffingListContainerComponent', () => {
  let component: StaffingListContainerComponent;
  let fixture: ComponentFixture<StaffingListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffingListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffingListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
