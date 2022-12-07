import { TestBed } from '@angular/core/testing';

import { ModalAceitarService } from './modal-aceitar.service';

describe('ModalAceitarService', () => {
  let service: ModalAceitarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAceitarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
