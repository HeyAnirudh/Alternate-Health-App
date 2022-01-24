import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainpage1Component } from './mainpage1.component';

describe('Mainpage1Component', () => {
  let component: Mainpage1Component;
  let fixture: ComponentFixture<Mainpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mainpage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
