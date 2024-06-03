import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TryService } from '../../../../try.service';

import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-vehicle-dialog',
  templateUrl: './add-vehicle-dialog.component.html',
  styleUrl: './add-vehicle-dialog.component.css'
})
export class AddVehicleDialogComponent {

  @Output() vehicleAdded: EventEmitter<void> = new EventEmitter<void>();

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


  constructor(private formBuilder: FormBuilder,  public dialogRef: MatDialogRef<AddVehicleDialogComponent> , private _service:TryService) {

    this.vehicleForm=this.formBuilder.group({
      vehicle_PlateNumber: ['', Validators.required],
      license_SerialNumber: ['', Validators.required],
      license_Registeration: ['', Validators.required],
      license_ExpirationDate: ['', Validators.required],
      vehicle_ChassisNum: ['', Validators.required],
      vehicle_ManufactureYear: ['', Validators.required],
      vehicle_BrandName: ['', Validators.required],
      vehicle_Color: ['', Validators.required],
      vehicle_Type: ['', Validators.required],
      vehicle_Insurance: ['', Validators.required],
      branch_ID: ['', Validators.required],
      vehicle_Price: ['', Validators.required],
      vehicle_Mileage: ['', Validators.required],
      vehicle_LastRepair_Date: ['', Validators.required],
      vehicle_LastRepair_Price: ['', Validators.required],
      vehicle_LastAccident_Date: ['', Validators.required],
      vehicle_Owner: ['', Validators.required],

    });
  }





  saveVehicle(): void {
    const vehicleData = this.vehicleForm.value;

    //console.log(vehicleData)

    this._service.addVehicle( vehicleData)
      .subscribe(
        response => {
          this.vehicleAdded.emit(); // Emit event when employee added successfully
          alert(' تم اضافه سياره بنجاح');
          this.dialogRef.close('success'); // Close the dialog with 'success' result
        },
        error => {
          alert(error.error.error)
        }
      );

  }




}
