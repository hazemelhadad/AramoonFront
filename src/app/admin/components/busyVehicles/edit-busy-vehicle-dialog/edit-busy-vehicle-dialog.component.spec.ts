import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusyVehicleDialogComponent } from './edit-busy-vehicle-dialog.component';

describe('EditBusyVehicleDialogComponent', () => {
  let component: EditBusyVehicleDialogComponent;
  let fixture: ComponentFixture<EditBusyVehicleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBusyVehicleDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBusyVehicleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
