import { TestBed } from '@angular/core/testing';

import { VisualizarService } from './visualizar.service';

describe('VisualizarService', () => {
  let service: VisualizarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualizarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
