import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioComponent } from './physio.component';

describe('PhysioComponent', () => {
  let component: PhysioComponent;
  let fixture: ComponentFixture<PhysioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
