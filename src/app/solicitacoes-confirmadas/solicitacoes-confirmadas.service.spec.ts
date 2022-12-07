import { TestBed } from '@angular/core/testing';

import { SolicitacoesConfirmadasService } from './solicitacoes-confirmadas.service';

describe('SolicitacoesConfirmadasService', () => {
  let service: SolicitacoesConfirmadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacoesConfirmadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
