import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal3Component } from './modal3.component';

describe('Modal3Component', () => {
  let component: Modal3Component;
  let fixture: ComponentFixture<Modal3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modal3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
