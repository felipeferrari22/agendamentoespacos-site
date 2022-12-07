import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAceitarComponent } from './modal-aceitar.component';

describe('ModalAceitarComponent', () => {
  let component: ModalAceitarComponent;
  let fixture: ComponentFixture<ModalAceitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAceitarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAceitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
