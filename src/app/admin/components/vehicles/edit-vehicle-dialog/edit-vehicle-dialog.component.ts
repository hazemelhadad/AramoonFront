import { error } from 'node:console';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TryService } from '../../../../try.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-edit-vehicle-dialog',
  templateUrl: './edit-vehicle-dialog.component.html',
  styleUrl: './edit-vehicle-dialog.component.css'
})
export class EditVehicleDialogComponent {

  @Output() vehicleUpdated: EventEmitter<void> = new EventEmitter<void>();

  vehicleForm: FormGroup;

  vehicle_PlateNumber: string | undefined;
  license_SerialNumber: string | undefined;
  license_Registeration: string | undefined;
  license_ExpirationDate: string | undefined;
  vehicle_ChassisNum: string | undefined;
  vehicle_ManufactureYear:number| undefined;
  vehicle_BrandName: string | undefined;
  vehicle_Color: string | undefined;
  vehicle_Type: string | undefined;
  vehicle_Insurance: string | undefined;
  branch_ID: number | undefined;
  vehicle_Price: number | undefined;
  vehicle_Mileage: number|undefined;
  vehicle_LastRepair_Date: string| undefined;
  vehicle_LastRepair_Price: number | undefined;
  vehicle_LastAccident_Date: string| undefined
  vehicle_Owner: string| undefined


  constructor(private formBuilder: FormBuilder,  public dialogRef: MatDialogRef<EditVehicleDialogComponent> , private _service:TryService , @Inject(MAT_DIALOG_DATA) public data: any) {

    this.vehicleForm=this.formBuilder.group({
      vehicle_PlateNumber: [''],
      license_SerialNumber: [''],
      license_Registeration: [''],
      license_ExpirationDate: [''],
      vehicle_ChassisNum: [''],
      vehicle_ManufactureYear: [''],
      vehicle_BrandName: [''],
      vehicle_Color: [''],
      vehicle_Type: [''],
      vehicle_Insurance: [''],
      branch_ID: [''],
      vehicle_Price: [''],
      vehicle_Mileage: [''],
      vehicle_LastRepair_Date: [''],
      vehicle_LastRepair_Price: [''],
      vehicle_LastAccident_Date: [''],
      vehicle_Owner: [''],

    });

  }

  ngOnInit(): void {
    this.vehicleForm.patchValue(this.data);
  }



  // Method to send PUT request
  updateVehicle(): void {

    console.log(this.vehicleForm.value)

    if (this.vehicleForm.valid) {
      if (this.data) {
        this._service
          .updateVehicle(this.data.vehicle_PlateNumber, this.vehicleForm.value)
          .subscribe({
            next: (val: any) => {
              this.vehicleUpdated.emit(); // Emit event when employee added successfully
              alert('vehicle updated successfully');
              this.dialogRef.close('success'); //

            },
            error: (err: HttpErrorResponse) => {
              console.error(err.error.error);
            },
          });
  }

}

  }


}
