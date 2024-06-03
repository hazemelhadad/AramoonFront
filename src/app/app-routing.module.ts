import { authGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './accounts/admin-login/admin-login.component';
import { DefaultComponent } from './admin/layouts/default/default.component';
import { ViewBranchesComponent } from './admin/components/Branch/view-branches/view-branches.component';
import { ViewVehiclesComponent } from './admin/components/vehicles/view-vehicles/view-vehicles.component';
import { ViewEmployeesComponent } from './admin/components/employee/view-employees/view-employees.component';
import { ViewBusyVehicleComponent } from './admin/components/busyVehicles/view-busy-vehicle/view-busy-vehicle.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [



  {path:'' , component: AdminLoginComponent},


  {
    path:'home',
    component:DefaultComponent,canActivate:[authGuard],
    children:[{
      path:'' ,
      component:ViewVehiclesComponent,
    },
    {
      path:'view-branch' ,
      component:ViewBranchesComponent
    },

    {
      path:'view-employee' ,
      component:ViewEmployeesComponent
    },

    {
      path:'view-busy-vehicles' ,
      component:ViewBusyVehicleComponent
    },

  ]
},

{path:'**',component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
