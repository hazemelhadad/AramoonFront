import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { TryService } from '../../../../try.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrl: './edit-employee-dialog.component.css'
})
export class EditEmployeeDialogComponent {

  @Output() employUpdated: EventEmitter<void> = new EventEmitter<void>();


  employeeForm: FormGroup;

  employee_ID: string | undefined;
  employee_Name: string | undefined;
  employee_Birthday: string | undefined;
  employee_City: string | undefined;
  employee_BuildingNumber: string | undefined;
  employee_Street_Name: string | undefined;
  employee_Nationality: string | undefined;
  branch_ID: number | undefined;
  employee_Role: string | undefined;
  employeePhones: string[] = [];
  password: null |undefined;
  userId:null | undefined



  jobOptions: string[] = ['Driver','Admin'];
  filteredJobOptions: string[] = [];

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER] as const;

  announcer = inject(LiveAnnouncer);

  constructor(private formBuilder: FormBuilder, private http: HttpClient ,   @Inject(MAT_DIALOG_DATA) public data: any,   private _service:TryService,

  private _dialogRef: MatDialogRef<EditEmployeeDialogComponent>) {

    this.employeeForm = this.formBuilder.group({
      employee_ID: [''],
      employee_Name: [''],
      employee_Birthday: [''],
      employee_City: [''],
      employee_BuildingNumber: [''],
      employee_Street_Name: [''],
      employee_Nationality: [''],
      branch_ID: [''],
      employee_Role: [''],
      employeePhones: [''],
      userId:[''],
      password:['']
    });


  }


  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.employeePhones.push(value.trim());
      this.employeeForm.get('employeePhones')?.setValue(this.employeePhones);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(phone: string): void {
    const index = this.employeePhones.indexOf(phone);

    if (index >= 0) {
      this.employeePhones.splice(index, 1);
      this.employeeForm.get('employeePhones')?.setValue(this.employeePhones);
    }
  }

  edit(phone: string, event: MatChipEditedEvent): void {
    const newPhone = event.chip.value.trim();
    const index = this.employeePhones.indexOf(phone);

    if (index !== -1) {
      this.employeePhones[index] = newPhone;
      this.employeeForm.get('employeePhones')?.setValue(this.employeePhones);
    }
  }

  // Method to send PUT request
  updateEmployee(): void {

    if (this.employeeForm.valid) {
      if (this.data) {
        this._service
          .updateEmployee(this.data.employee_ID, this.employeeForm.value)
          .subscribe({
            next: (val: any) => {
              this.employUpdated.emit(); // Emit event when employee added successfully
              alert('تم تعديل بيانات الموظف بنجاح');
              this._dialogRef.close('success'); //

            },
            error: (err: HttpErrorResponse) => {
              alert(err.error.error);
            },
          });
  }

}

  }

}


