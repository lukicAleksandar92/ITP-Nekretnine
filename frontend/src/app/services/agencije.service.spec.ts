import { TestBed } from '@angular/core/testing';

import { AgencijeService } from './agencije.service';

describe('AgencijeService', () => {
  let service: AgencijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
