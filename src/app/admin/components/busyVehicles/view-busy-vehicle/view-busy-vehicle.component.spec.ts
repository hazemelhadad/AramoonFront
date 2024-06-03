import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusyVehicleComponent } from './view-busy-vehicle.component';

describe('ViewBusyVehicleComponent', () => {
  let component: ViewBusyVehicleComponent;
  let fixture: ComponentFixture<ViewBusyVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBusyVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBusyVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
