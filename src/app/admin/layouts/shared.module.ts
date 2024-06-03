import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewBranchesComponent } from '../components/Branch/view-branches/view-branches.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddBranchDialogComponent } from '../components/Branch/add-branch-dialog/add-branch-dialog.component';
import { EditBranchDialogComponent } from '../components/Branch/edit-branch-dialog/edit-branch-dialog.component';
import { ViewVehiclesComponent } from '../components/vehicles/view-vehicles/view-vehicles.component';
import { AddVehicleDialogComponent } from '../components/vehicles/add-vehicle-dialog/add-vehicle-dialog.component';
import { EditVehicleDialogComponent } from '../components/vehicles/edit-vehicle-dialog/edit-vehicle-dialog.component';
import { ViewEmployeesComponent } from '../components/employee/view-employees/view-employees.component';
import { AddEmployeeDialogComponent } from '../components/employee/add-employee-dialog/add-employee-dialog.component';
import { EditEmployeeDialogComponent } from '../components/employee/edit-employee-dialog/edit-employee-dialog.component';
import { TryComponent } from '../../try/try.component';
import { MatPaginator } from '@angular/material/paginator';

import { MatChipsModule } from '@angular/material/chips'; // Import MatChipsModule
import { ConfirmDialogComponent } from '../components/employee/confirm-dialog/confirm-dialog.component';
import { ViewBusyVehicleComponent } from '../components/busyVehicles/view-busy-vehicle/view-busy-vehicle.component';
import { EditBusyVehicleDialogComponent } from '../components/busyVehicles/edit-busy-vehicle-dialog/edit-busy-vehicle-dialog.component';
import { AddBusyVehicleDialogComponent } from '../components/busyVehicles/add-busy-vehicle-dialog/add-busy-vehicle-dialog.component';











@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DefaultComponent,
    
    ViewBranchesComponent,
    AddBranchDialogComponent,
    EditBranchDialogComponent,
    ViewVehiclesComponent,
    AddVehicleDialogComponent,
    EditVehicleDialogComponent,
    ViewEmployeesComponent,
    AddEmployeeDialogComponent,
    EditEmployeeDialogComponent,
    TryComponent,
    ConfirmDialogComponent,
    ViewBusyVehicleComponent,
    EditBusyVehicleDialogComponent,
    AddBusyVehicleDialogComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule ,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginator,
    FormsModule,
    MatListModule,
    MatChipsModule
    
   
  ]
})
export class SharedModule { }
