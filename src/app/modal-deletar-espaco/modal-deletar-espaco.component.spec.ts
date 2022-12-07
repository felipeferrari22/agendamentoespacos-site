import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletarEspacoComponent } from './modal-deletar-espaco.component';

describe('ModalDeletarEspacoComponent', () => {
  let component: ModalDeletarEspacoComponent;
  let fixture: ComponentFixture<ModalDeletarEspacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeletarEspacoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeletarEspacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
