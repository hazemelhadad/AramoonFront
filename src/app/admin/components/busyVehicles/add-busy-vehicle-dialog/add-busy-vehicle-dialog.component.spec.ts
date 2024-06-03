import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusyVehicleDialogComponent } from './add-busy-vehicle-dialog.component';

describe('AddBusyVehicleDialogComponent', () => {
  let component: AddBusyVehicleDialogComponent;
  let fixture: ComponentFixture<AddBusyVehicleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBusyVehicleDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBusyVehicleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
