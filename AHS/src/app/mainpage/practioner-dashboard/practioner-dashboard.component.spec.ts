import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractionerDashboardComponent } from './practioner-dashboard.component';

describe('PractionerDashboardComponent', () => {
  let component: PractionerDashboardComponent;
  let fixture: ComponentFixture<PractionerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractionerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PractionerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
