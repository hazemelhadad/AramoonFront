import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';





@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrl: './try.component.css'
})
export class TryComponent implements OnInit{
  
  public getJusonValue:any;
  public dataSource:any=new MatTableDataSource<any>();;

    
  displayedColumns: string[]=[ 'employee_Birthday' ,'employee_Role' , 'employee_Nationality' ,'employee_ID', 'employee_Name'  ]

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor (private http: HttpClient){}

 ngOnInit(): void {
   this.getMethod();
 }

  

  public getMethod(){
    this.http.get('http://localhost:5082/api/Admin').subscribe((data:any) =>{
      //console.table(data)
      this.getJusonValue=data;
      this.dataSource.data=data;
    })
  }

  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
