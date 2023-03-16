import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaydataBindingComponent } from './two-waydata-binding.component';

describe('TwoWaydataBindingComponent', () => {
  let component: TwoWaydataBindingComponent;
  let fixture: ComponentFixture<TwoWaydataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWaydataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWaydataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
