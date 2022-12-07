import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitantesComponent } from './solicitantes.component';

describe('SolicitantesComponent', () => {
  let component: SolicitantesComponent;
  let fixture: ComponentFixture<SolicitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
