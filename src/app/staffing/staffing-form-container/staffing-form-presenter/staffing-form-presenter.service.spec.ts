import { TestBed } from '@angular/core/testing';

import { StaffingFormPresenterService } from './staffing-form-presenter.service';

describe('StaffingFormPresenterService', () => {
  let service: StaffingFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffingFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
