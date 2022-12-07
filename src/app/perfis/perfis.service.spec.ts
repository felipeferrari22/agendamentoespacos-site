import { TestBed } from '@angular/core/testing';

import { PerfisService } from './perfis.service';

describe('PerfisService', () => {
  let service: PerfisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
