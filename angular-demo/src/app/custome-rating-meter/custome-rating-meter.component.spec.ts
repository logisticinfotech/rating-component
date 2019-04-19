import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeRatingMeterComponent } from './custome-rating-meter.component';

describe('CustomeRatingMeterComponent', () => {
  let component: CustomeRatingMeterComponent;
  let fixture: ComponentFixture<CustomeRatingMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeRatingMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeRatingMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
