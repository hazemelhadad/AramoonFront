import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  // private userDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  logout(){
    localStorage.removeItem('eToken')
    this._Router.navigate(['/'])
  }

  saveUserData(){
    if(localStorage.getItem('eToken')!=null)
      {
        let encode:any=localStorage.getItem('eToken')
        let decode:any=jwtDecode(encode)
        this.userData.next(decode);
        
      }
  }


  setLogin(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://aarmoonsystem.runasp.net/api/Account/login',userData);
  }
}
