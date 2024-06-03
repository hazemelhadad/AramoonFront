import { Component , OnInit  , ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { AddBranchDialogComponent } from '../add-branch-dialog/add-branch-dialog.component';
import { EditBranchDialogComponent } from '../edit-branch-dialog/edit-branch-dialog.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TryService } from '../../../../try.service';
import { ConfirmDialogComponent } from '../../employee/confirm-dialog/confirm-dialog.component';



@Component({
  selector: 'app-view-branches',
  templateUrl: './view-branches.component.html',
  styleUrl: './view-branches.component.css'
})
export class ViewBranchesComponent {


  public dataSource:any=new MatTableDataSource<any>();


  displayedColumns: string[]=['id' , 'name', 'location',"action" ]

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(public dialog: MatDialog , private http: HttpClient, private route: ActivatedRoute ,private _service:TryService  ,private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.getMethod();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }




  openDialog(): void {
    const dialogRef = this.dialog.open(AddBranchDialogComponent, { width:'40%' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

        this. getMethod()

      }
    });
  }



  editDialog(data: any) {
    const dialogRef = this.dialog.open( EditBranchDialogComponent,  {
      data,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

        this. getMethod()

      }
    });
  }

  public getMethod(){

    this._service.getAllBranches().subscribe({
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


  openConfirmDialog(branch_ID:number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'هل انت متاكد من حذف هذا الفرع' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBranch(branch_ID);
      }
    });
  }


  deleteBranch(id: number): void {
    this._service.deleteBranch(id).subscribe(
      () => {
        alert(` ${id} تم الغاء الفرع`);
       this. getMethod()
      },
      error => {
        alert(error.error.error)
}
    );
  }

}
