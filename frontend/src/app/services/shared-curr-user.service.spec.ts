import { TestBed } from '@angular/core/testing';

import { SharedCurrUserService } from './shared-curr-user.service';

describe('SharedCurrUserService', () => {
  let service: SharedCurrUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCurrUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
