import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  auth: any;
  name: any;
  NotA: boolean = true;

  constructor(private _AuthService: AuthService) {}

  ngOnInit() {
    if (this._AuthService.userData) {
      this.name=this._AuthService.userData.value.EmplyeeName
      this.auth = this._AuthService.userData.value["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"][1];
      this.NotA = this.auth !== 'Admin';
    }
  }

  logout() {
    this._AuthService.logout();
  }
}
