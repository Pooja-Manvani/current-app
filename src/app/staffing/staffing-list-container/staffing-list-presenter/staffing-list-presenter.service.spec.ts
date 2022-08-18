import { TestBed } from '@angular/core/testing';

import { StaffingListPresenterService } from './staffing-list-presenter.service';

describe('StaffingListPresenterService', () => {
  let service: StaffingListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffingListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
