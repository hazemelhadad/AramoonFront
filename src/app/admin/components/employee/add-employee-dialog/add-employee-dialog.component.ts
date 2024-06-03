import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes'; // Import ENTER
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TryService } from '../../../../try.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'node:console';





@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.css']
})

export class AddEmployeeDialogComponent implements OnInit{

  @Output() employeeAdded: EventEmitter<void> = new EventEmitter<void>();

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

  auth: any;

  NotA: boolean = true;



  jobOptions: string[] = ['Driver','Admin'];
  filteredJobOptions: string[] = [];



  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER] as const;

  announcer = inject(LiveAnnouncer);

  constructor( private _AuthService: AuthService,private formBuilder: FormBuilder, private http: HttpClient , public dialogRef: MatDialogRef<AddEmployeeDialogComponent> , private _service:TryService) {



    this.employeeForm = this.formBuilder.group({
      employee_ID: ['', Validators.required],
      employee_Name: ['', Validators.required],
      employee_Birthday: ['', Validators.required],
      employee_City: ['', Validators.required],
      employee_BuildingNumber: ['', Validators.required],
      employee_Street_Name: ['', Validators.required],
      employee_Nationality: ['', Validators.required],
      branch_ID: ['', Validators.required],
      employee_Role: ['', Validators.required],
      employeePhones: ['', Validators.required],
      userId:[null],
      password:[null]

    });
  }
  ngOnInit() {
    if (this._AuthService.userData) {
      this.auth = this._AuthService.userData.value["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"][1];
      this.NotA = this.auth !== 'Admin';
      this.filteredJobOptions = this.jobOptions.filter(job => {
        return this.NotA ? job === 'Admin' : job === 'Driver';
      });
    }
  }

  // Add method to add phone number to the list
    // Add method to add phone number to the list
add(event: MatChipInputEvent): void {
  const input = event.input;
  const value = event.value;

  // Add phone number if input is not empty and is valid
  if ((value || '').trim()) {
    this.employeePhones.push(value.trim()); // Push only the value
    this.employeeForm.get('employeePhones')?.setValue(this.employeePhones);
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }
}


  // Remove method to remove phone number from the list
  remove(phone: string): void {
    const index = this.employeePhones.indexOf(phone);

    if (index >= 0) {
      this.employeePhones.splice(index, 1);
      this.employeeForm.get('employeePhones')?.setValue(this.employeePhones);
    }
  }

  edit(phone: string, event: MatChipEditedEvent): void {
    const newPhone = event.chip.value.trim();
    const index = this.employeePhones .indexOf(phone);

    if (index !== -1) {
      this.employeePhones[index] = newPhone;
      this.employeeForm.get('employeePhones')?.setValue(this.employeePhones);
    }
  }




  saveEmployee() {
    const employeeData = this.employeeForm.value;

    console.log(employeeData)

    this._service.addEmployee( employeeData)
      .subscribe(
        response => {
          this.employeeAdded.emit(); // Emit event when employee added successfully
          alert('تم اضافه موظف بنجاح');
          this.dialogRef.close('success'); // Close the dialog with 'success' result
        },
        error => {

          alert(error.error.error);

        }
      );
  }



}
