import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TryService {
  headers: any;
  headers2: any;
  auth: string | undefined;

  constructor(private _http: HttpClient, private _AuthService: AuthService) {
    this.initialize();
  }
  initialize() {
    if (typeof localStorage !== 'undefined') {
      this.headers = {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('eToken'),
      };

      this.headers2 = {
        accept: '*/*',
        Authorization: 'Bearer ' + localStorage.getItem('eToken'),
        'Content-Type': 'application/json',
      };
    }
    if (this._AuthService.userData) {
      this._AuthService.userData.subscribe((n) => {
        this.auth =
          n['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'][1];
      });
    } else {
      // Handle the case where userData is not available
      console.error('User data is not available.');
      this.auth = undefined;
    }
  }

  // employee APIs

  // put

  updateEmployee(id: string, data: any): Observable<any> {
    const url = `https://aarmoonsystem.runasp.net/api/SuperAdminController/UpdateEmployees/${id}`;
    const url2 = `https://aarmoonsystem.runasp.net/api/AdminController/UpdateEmployeeData/${id}`;
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
      'Content-Type': 'application/json',
    };

    const f = this.auth == 'Admin' ? url2 : url;

    return this._http.put(f, data, {
      headers: newHeader,
    });
  }

  // get employee

  getAllEmployees(): Observable<any> {
    const url =
      'https://aarmoonsystem.runasp.net/api/SuperAdminController/GetAllCompanyEmployees';
    const url2 =
      'https://aarmoonsystem.runasp.net/api/AdminController/GetAllEmployeesByBranch';

    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
    };
    const f = this.auth == 'Admin' ? url2 : url;

    return this._http.get(f, {
      headers: newHeader,
    });
  }

  // post

  addEmployee(data: any): Observable<any> {
    const url =
      'https://aarmoonsystem.runasp.net/api/SuperAdminController/AddEmployee';
    const url2 =
      'https://aarmoonsystem.runasp.net/api/AdminController/AddEmployee';
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
      'Content-Type': 'application/json',
    };

    const f = this.auth == 'Admin' ? url2 : url;
    return this._http.post(f, data, {
      headers: newHeader,
    });
  }

  // delete

  deleteEmployee(id: string): Observable<any> {
    const url = `https://aarmoonsystem.runasp.net/api/SuperAdminController/DeleteEmployee/${id}`;
    const url2 = `https://aarmoonsystem.runasp.net/api/AdminController/DeleteEmployee/${id}`;
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
    };
    const f = this.auth == 'Admin' ? url2 : url;

    return this._http.delete(f, {
      headers: newHeader,
    });
  }

  // ///////    vehicles APIs ////////////////////

  // get  vehicles

  getAllVehicles(): Observable<any> {
    const url =
      'https://aarmoonsystem.runasp.net/api/SuperAdminController/GetAllVehicles';
    const url2 =
      'https://aarmoonsystem.runasp.net/api/AdminController/GetAllVehiclesByBranch';

    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
    };
    const f = this.auth == 'Admin' ? url2 : url;
    return this._http.get(f, {
      headers: newHeader,
    });
  }

  // add vehicles

  addVehicle(data: any): Observable<any> {
    const url =
      'https://aarmoonsystem.runasp.net/api/SuperAdminController/AddVehicle';
    const url2 =
      'https://aarmoonsystem.runasp.net/api/AdminController/AddVehicle';
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
      'Content-Type': 'application/json',
    };
    const f = this.auth == 'Admin' ? url2 : url;
    return this._http.post(f, data, {
      headers: newHeader,
    });
  }

  // update vehicle

  updateVehicle(pltNum: string, data: any): Observable<any> {
    const url = `https://aarmoonsystem.runasp.net/api/SuperAdminController/UpdateVehicleData/${pltNum}`;
    const url2 = `https://aarmoonsystem.runasp.net/api/AdminController/UpdateVehicleData/${pltNum}`;
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
      'Content-Type': 'application/json',
    };

    const f = this.auth == 'Admin' ? url2 : url;

    return this._http.put(f, data, {
      headers: newHeader,
    });
  }

  // delete vehicle

  deleteVehicle(pltNum: string): Observable<any> {
    const url = `https://aarmoonsystem.runasp.net/api/SuperAdminController/DeleteVehicle/${pltNum}`;
    const url2 = `https://aarmoonsystem.runasp.net/api/AdminController/DeleteVehicle/${pltNum}`;
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
    };
    const f = this.auth == 'Admin' ? url2 : url;

    return this._http.delete(f, {
      headers: newHeader,
    });
  }

  ///=========================Branches==============================================

  getAllBranches(): Observable<any> {
    const url =
      'https://aarmoonsystem.runasp.net/api/SuperAdminController/GetAllBranches';
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
    };
    return this._http.get(url, {
      headers: newHeader,
    });
  }

  // add branch

  addBranch(data: any): Observable<any> {
    const url =
      'https://aarmoonsystem.runasp.net/api/SuperAdminController/AddBranch';
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
      'Content-Type': 'application/json',
    };
    return this._http.post(url, data, {
      headers: newHeader,
    });
  }

  // update branch ///

  updateBranch(BranchID: number, data: any): Observable<any> {
    const url = `https://aarmoonsystem.runasp.net/api/SuperAdminController/EditBranch/${BranchID}`;
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
      'Content-Type': 'application/json',
    };
    return this._http.put(url, data, {
      headers: newHeader,
    });
  }

  /// delete branch ////

  deleteBranch(BranchID: number): Observable<any> {
    const url = `https://aarmoonsystem.runasp.net/api/SuperAdminController/DeleteBranch/${BranchID}`;
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
    };
    return this._http.delete(url, {
      headers: newHeader,
    });
  }

  ///////////// busy vehicles //////////////////////

  /// get busy vehicle

  getAllbusyVehicles(): Observable<any> {
    const url =
      'https://aarmoonsystem.runasp.net/api/SuperAdminController/GetAllVehiclesInUse';
    const url2 =
      'https://aarmoonsystem.runasp.net/api/AdminController/GetAllVehiclesInUse';
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
    };

    const f = this.auth == 'Admin' ? url2 : url;
    return this._http.get(f, {
      headers: newHeader,
    });
  }

  //// add busy vehicle ///////

  addBusyVehicle(data: any): Observable<any> {
    const url =
      'https://aarmoonsystem.runasp.net/api/AdminController/AssignEmployeeToVehicle';
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
      'Content-Type': 'application/json',
    };
    return this._http.post(url, data, {
      headers: newHeader,
    });
  }

  ///// delete//////

  deleteVehicleInUse(id: string, pltNum: string): Observable<any> {
    const url = `https://aarmoonsystem.runasp.net/api/AdminController/FreeTheVehicleFromSingleEmployee/${id}/${pltNum}`;
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
    };
    return this._http.delete(url, {
      headers: newHeader,
    });
  }

  deleteAllVehicleInUse(pltNum: string): Observable<any> {
    console.log('iam hereeeeeee');
    const url = `https://aarmoonsystem.runasp.net/api/AdminController/FreeTheVehicleFromAllEmployees/${pltNum}`;
    let newHeader = {
      accept: '*/*',
      Authorization: 'Bearer ' + localStorage.getItem('eToken'),
    };
    return this._http.delete(url, {
      headers: newHeader,
    });
  }
}
