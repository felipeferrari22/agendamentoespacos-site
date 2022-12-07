import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacosComponent } from './espacos.component';

describe('EspacosComponent', () => {
  let component: EspacosComponent;
  let fixture: ComponentFixture<EspacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
