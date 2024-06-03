import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TryService } from '../../../../try.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddBranchDialogComponent } from '../../Branch/add-branch-dialog/add-branch-dialog.component';


@Component({
  selector: 'app-delete-all-vechicle',
  templateUrl: './delete-all-vechicle.component.html',
  styleUrl: './delete-all-vechicle.component.css',

})
export class DeleteAllVechicleComponent {


  @Output() busyVehicleAdded: EventEmitter<void> = new EventEmitter<void>();

   busyVehicleForm: FormGroup;

   vehiclePlateNumber:string| undefined;



  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DeleteAllVechicleComponent> , private _service:TryService) {


    this.busyVehicleForm = this.formBuilder.group({
      vehiclePlateNumber: ['', Validators.required],

   });
 }


 saveBusyVehicle(t:string): void {
  const busyVehicleData = this.busyVehicleForm.value.vehiclePlateNumber;



  this._service.deleteAllVehicleInUse( t)
    .subscribe(
      response => {
        this.busyVehicleAdded.emit();
        alert('تم الحذف  ');
        this.dialogRef.close('success'); // Close the dialog with 'success' result
      },
      error => {
          alert(error.error.error)      }
    );
}



}
