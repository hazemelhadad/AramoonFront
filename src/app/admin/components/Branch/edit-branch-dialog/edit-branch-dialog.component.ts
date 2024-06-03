import { error } from 'node:console';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TryService } from '../../../../try.service';
import { AddBranchDialogComponent } from '../add-branch-dialog/add-branch-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-edit-branch-dialog',
  templateUrl: './edit-branch-dialog.component.html',
  styleUrl: './edit-branch-dialog.component.css'
})
export class EditBranchDialogComponent {

  @Output() branchUpdated: EventEmitter<void> = new EventEmitter<void>();

  branchForm: FormGroup;

  branch_ID: number | undefined ;
  branch_Name: string |undefined;
  branch_Location:string| undefined;


  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<AddBranchDialogComponent> , private _service:TryService) {


     this.branchForm = this.formBuilder.group({
      branch_ID:[''],
      branch_Name: [''],
      branch_Location: [''],

    });
  }


  ngOnInit(): void {
    this.branchForm.patchValue(this.data);
  }



   UpdateBranch(): void {
    if (this.branchForm.valid) {
      if (this.data) {
        this._service
          .updateBranch(this.data.branch_ID, this.branchForm.value)
          .subscribe({
            next: (val: any) => {
              this.branchUpdated.emit(); // Emit event when employee added successfully
              alert('تم تعديل بيانات الفرع بنجاح');
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
