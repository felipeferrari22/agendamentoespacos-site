import { TestBed } from '@angular/core/testing';

import { SolicitantesService } from './solicitantes.service';

describe('SolicitantesService', () => {
  let service: SolicitantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
