import { TestBed } from '@angular/core/testing';

import { GlobaluserService } from './globaluser.service';

describe('GlobaluserService', () => {
  let service: GlobaluserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobaluserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
