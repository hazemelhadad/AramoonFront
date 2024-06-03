import { Component , OnInit  , ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TryService } from '../../../../try.service';
import { ConfirmDialogComponent } from '../../employee/confirm-dialog/confirm-dialog.component';
import { AddBusyVehicleDialogComponent } from '../add-busy-vehicle-dialog/add-busy-vehicle-dialog.component';
import { DeleteAllVechicleComponent } from '../delete-all-vechicle/delete-all-vechicle.component';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-view-busy-vehicle',
  templateUrl: './view-busy-vehicle.component.html',
  styleUrl: './view-busy-vehicle.component.css'
})
export class ViewBusyVehicleComponent {

  public dataSource:any=new MatTableDataSource<any>();


  displayedColumns: string[]=['employeeId' , 'vehiclePlateNumber',"action" ]
  auth: any;

  NotA: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _AuthService: AuthService,public dialog: MatDialog , private http: HttpClient, private route: ActivatedRoute ,private _service:TryService  ,private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.getMethod();
      if (this._AuthService.userData) {
        this.auth = this._AuthService.userData.value["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"][1];
        this.NotA = this.auth == 'Admin';
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }




  openDialog(): void {
    const dialogRef = this.dialog.open(AddBusyVehicleDialogComponent, { width:'40%' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

        this. getMethod()


      }
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(DeleteAllVechicleComponent, { width:'40%' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

        this. getMethod()


      }
    });
  }





  public getMethod(){

    this._service.getAllbusyVehicles().subscribe({
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


  openConfirmDialog(employee_ID:string , vehiclePlateNumber:string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'هل انت متأكد' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteVehicleInUse(employee_ID , vehiclePlateNumber);
      }
    });
  }


  deleteVehicleInUse(employeeId:string , vehiclePlateNumber:string): void {
    this._service.deleteVehicleInUse(employeeId,vehiclePlateNumber).subscribe(
      () => {
        alert(` ${employeeId} تم الالغاء بنجاح`);
       this. getMethod()
      },
      error => {
        alert(error.error.error)      }
    );
  }



}
