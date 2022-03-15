import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appointment1Component } from './appointment1.component';

describe('Appointment1Component', () => {
  let component: Appointment1Component;
  let fixture: ComponentFixture<Appointment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Appointment1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Appointment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
