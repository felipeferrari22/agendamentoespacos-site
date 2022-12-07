import { TestBed } from '@angular/core/testing';

import { PerfisNovoService } from './perfis-novo.service';

describe('PerfisNovoService', () => {
  let service: PerfisNovoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfisNovoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
