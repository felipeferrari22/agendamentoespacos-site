import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesConfirmadasComponent } from './solicitacoes-confirmadas.component';

describe('SolicitacoesConfirmadasComponent', () => {
  let component: SolicitacoesConfirmadasComponent;
  let fixture: ComponentFixture<SolicitacoesConfirmadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacoesConfirmadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacoesConfirmadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
