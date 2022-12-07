import { TestBed } from '@angular/core/testing';

import { SolicitarService } from './solicitar.service';

describe('SolicitarService', () => {
  let service: SolicitarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
