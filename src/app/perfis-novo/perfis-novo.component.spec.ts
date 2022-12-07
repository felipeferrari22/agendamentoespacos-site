import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisNovoComponent } from './perfis-novo.component';

describe('PerfisNovoComponent', () => {
  let component: PerfisNovoComponent;
  let fixture: ComponentFixture<PerfisNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfisNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfisNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
