import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitanteNovoComponent } from './solicitante-novo.component';

describe('SolicitanteNovoComponent', () => {
  let component: SolicitanteNovoComponent;
  let fixture: ComponentFixture<SolicitanteNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitanteNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitanteNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
