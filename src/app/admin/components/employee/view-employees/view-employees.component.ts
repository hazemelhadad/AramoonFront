import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';
import { EditEmployeeDialogComponent } from '../edit-employee-dialog/edit-employee-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TryService } from '../../../../try.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css'],
})
export class ViewEmployeesComponent implements OnInit, AfterViewInit {
  public dataSource: any = new MatTableDataSource<any>();
  public printData: any = {};

  displayedColumns: string[] = [
    'employee_ID',
    'employee_Name',
    'employee_Birthday',
    'branch_ID',
    'employee_City',
    'employee_BuildingNumber',
    'employee_Street_Name',
    'employee_Nationality',
    'employee_Role',
    'employeePhones',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private route: ActivatedRoute,
    private _service: TryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.getMethod();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {
        this.getMethod();
      }
    });
  }

  editDialog(data: any) {
    const dialogRef = this.dialog.open(EditEmployeeDialogComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {
        this.getMethod();
      }
    });
  }

  public getMethod() {
    this._service.getAllEmployees().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openConfirmDialog(employee_ID: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'هل انت متاكد انك تريد حذف هذا الموظف' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteEmployee(employee_ID);
      }
    });
  }

  deleteEmployee(id: string): void {
    this._service.deleteEmployee(id).subscribe(
      () => {
        alert(`Employee with ID ${id} deleted successfully`);
        this.getMethod();
      },
      (error) => {
        alert(error.error.error);
      }
    );
  }

  printEmployee(employee: any): void {
    this.printData = employee;
    setTimeout(() => {
      const printContents = document.getElementById('print-section')!.innerHTML;
      const originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }, 1000);
  }
}
