import { TestBed } from '@angular/core/testing';

import { ProdavacGuard } from './prodavac.guard';

describe('ProdavacGuard', () => {
  let guard: ProdavacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProdavacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
