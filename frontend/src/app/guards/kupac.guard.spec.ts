import { TestBed } from '@angular/core/testing';

import { KupacGuard } from './kupac.guard';

describe('KupacGuard', () => {
  let guard: KupacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KupacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
