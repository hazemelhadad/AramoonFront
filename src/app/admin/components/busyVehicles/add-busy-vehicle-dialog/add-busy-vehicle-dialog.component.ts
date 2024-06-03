import { error } from 'node:console';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TryService } from '../../../../try.service';
import { AddBranchDialogComponent } from '../../Branch/add-branch-dialog/add-branch-dialog.component';

@Component({
  selector: 'app-add-busy-vehicle-dialog',
  templateUrl: './add-busy-vehicle-dialog.component.html',
  styleUrl: './add-busy-vehicle-dialog.component.css'
})
export class AddBusyVehicleDialogComponent {

  @Output() busyVehicleAdded: EventEmitter<void> = new EventEmitter<void>();

   busyVehicleForm: FormGroup;

   employeeId: string |undefined;
   vehiclePlateNumber:string| undefined;


  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddBranchDialogComponent> , private _service:TryService) {


    this.busyVehicleForm = this.formBuilder.group({
      employeeId : ['', Validators.required],
      vehiclePlateNumber: ['', Validators.required],

   });
 }


 saveBusyVehicle(): void {
  const busyVehicleData = this.busyVehicleForm.value;

  console.log(busyVehicleData)

  this._service.addBusyVehicle( busyVehicleData)
    .subscribe(
      response => {
        this.busyVehicleAdded.emit();
        alert('تم اضافه مركبه لسائق');
        this.dialogRef.close('success'); // Close the dialog with 'success' result
      },
      error => {
          alert(error.error.error)      }
    );
}



}
