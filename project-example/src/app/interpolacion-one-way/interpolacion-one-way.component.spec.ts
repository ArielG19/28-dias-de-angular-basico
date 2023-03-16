import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacionOneWayComponent } from './interpolacion-one-way.component';

describe('InterpolacionOneWayComponent', () => {
  let component: InterpolacionOneWayComponent;
  let fixture: ComponentFixture<InterpolacionOneWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolacionOneWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolacionOneWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
