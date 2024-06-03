import { error } from 'node:console';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TryService } from '../../../../try.service';
import { AddBusyVehicleDialogComponent } from '../add-busy-vehicle-dialog/add-busy-vehicle-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-edit-busy-vehicle-dialog',
  templateUrl: './edit-busy-vehicle-dialog.component.html',
  styleUrl: './edit-busy-vehicle-dialog.component.css'
})
export class EditBusyVehicleDialogComponent {


//   @Output() branchUpdated: EventEmitter<void> = new EventEmitter<void>();

//   branchForm: FormGroup;

//   branch_ID: number | undefined ;
//   branch_Name: string |undefined;
//   branch_Location:string| undefined;


//   constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<AddBusyVehicleDialogComponent> , private _service:TryService) {


//      this.branchForm = this.formBuilder.group({
//       emp_ID:[''],
//       plate_no: [''],

//     });
//   }


//   ngOnInit(): void {
//     this.branchForm.patchValue(this.data);
//   }



//    UpdateBranch(): void {
//     if (this.branchForm.valid) {
//       if (this.data) {
//         this._service
//           .updateBranch(this.data.branch_ID, this.branchForm.value)
//           .subscribe({
//             next: (val: any) => {
//               this.branchUpdated.emit();
//               alert('تم تعديل بيانات بنجاح');
//               this.dialogRef.close('success'); //

//             },
//             error: (err: HttpErrorResponse) => {
//               console.error(err.error.error);
//             },
//           });
//   }

// }
//   }

}
