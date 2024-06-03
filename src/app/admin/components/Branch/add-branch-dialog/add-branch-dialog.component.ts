import { error } from 'node:console';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TryService } from '../../../../try.service';
import { AddEmployeeDialogComponent } from '../../employee/add-employee-dialog/add-employee-dialog.component';

@Component({
  selector: 'app-add-branch-dialog',
  templateUrl: './add-branch-dialog.component.html',
  styleUrl: './add-branch-dialog.component.css'
})
export class AddBranchDialogComponent {

  @Output() branchAdded: EventEmitter<void> = new EventEmitter<void>();

  branchForm: FormGroup;

  branch_Name: string |undefined;
  branch_Location:string| undefined;


  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddBranchDialogComponent> , private _service:TryService) {


     this.branchForm = this.formBuilder.group({
      branch_Name: ['', Validators.required],
      branch_Location: ['', Validators.required],

    });
  }


  saveBranch(): void {
    const branchData = this.branchForm.value;

    this._service.addBranch( branchData)
      .subscribe(
        response => {
          this.branchAdded.emit();
          alert('تم اضافه فرع');
          this.dialogRef.close('success'); // Close the dialog with 'success' result
        },
        error => {
          alert( error.error.error);
        }
      );
  }



}
