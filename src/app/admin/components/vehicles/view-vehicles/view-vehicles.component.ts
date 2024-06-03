import { Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { AddVehicleDialogComponent } from '../add-vehicle-dialog/add-vehicle-dialog.component';
import { EditVehicleDialogComponent } from '../edit-vehicle-dialog/edit-vehicle-dialog.component';
import { TryService } from '../../../../try.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../employee/confirm-dialog/confirm-dialog.component';
import { AddBusyVehicleDialogComponent } from '../../busyVehicles/add-busy-vehicle-dialog/add-busy-vehicle-dialog.component';




@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrl: './view-vehicles.component.css'
})


export class ViewVehiclesComponent {
  public dataSource:any=new MatTableDataSource<any>();


  displayedColumns: string[]=['vehicle_PlateNumber', 'license_SerialNumber' ,'license_Registeration' ,'license_ExpirationDate','vehicle_ChassisNum','vehicle_ManufactureYear','vehicle_BrandName','vehicle_Color' ,'vehicle_Type','vehicle_Insurance','branch_ID','vehicle_Price' ,'vehicle_Mileage','vehicle_LastRepair_Date','vehicle_LastRepair_Price','vehicle_LastAccident_Date','vehicle_Owner',"action" ]

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog , private _service:TryService , private route: ActivatedRoute  , private _Router:Router) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.getMethod();
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }


  public getMethod(){

    this._service.getAllVehicles().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);

        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });

  }


  openDialog() {
    const dialogRef = this.dialog.open(AddVehicleDialogComponent, { width:'50%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

        this. getMethod()


      }
    });
  }


  editDialog(data: any) {
    const dialogRef = this.dialog.open( EditVehicleDialogComponent,  {
      data,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

        this. getMethod()

      }
    });
  }

  assignDialog() {
    const dialogRef = this.dialog.open( AddBusyVehicleDialogComponent, { width:'50%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result === 'success') {

        this._Router.navigate(['/home/view-busy-vehicles'])

      }
    });
  }



  openConfirmDialog(vehicle_PlateNumber:string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'هل انت متاكد انك تريد حذف هذة المركبة' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteVehicle(vehicle_PlateNumber);
      }
    });
  }


  deleteVehicle(pltNum: string): void {
    this._service.deleteVehicle(pltNum).subscribe(
      () => {
        alert(`Employee with ID ${pltNum} deleted successfully`);
       this. getMethod()
      },
      error => {
        alert( error.error.error);
      }
    );
  }


}
