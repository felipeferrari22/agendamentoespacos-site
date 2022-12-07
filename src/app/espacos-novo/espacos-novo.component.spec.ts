import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacosNovoComponent } from './espacos-novo.component';

describe('EspacosNovoComponent', () => {
  let component: EspacosNovoComponent;
  let fixture: ComponentFixture<EspacosNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacosNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacosNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
