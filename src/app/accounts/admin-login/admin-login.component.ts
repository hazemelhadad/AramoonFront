import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
//  id = new FormControl('', [Validators.required]);
constructor(private _AuthService:AuthService,private _Router:Router,private _FormBuilder:FormBuilder){}
msgError:string=''
isloading:boolean=false

// registerform:FormGroup=new FormGroup({
//   employeeID:new FormControl('',[Validators.required]),
//   password:new FormControl('',[Validators.required]),


// })

registerform:FormGroup=this._FormBuilder.group({
  employeeID:['',[Validators.required]],
  password:['',[Validators.required]]
})


handleform()
{
  if(this.registerform.valid)
  {
    this.isloading=true
    this._AuthService.setLogin(this.registerform.value).subscribe({
      next:(response)=>{
        if(response.message=='تم تسجيل الدخول بنجاح'){
          this.isloading=false
          localStorage.setItem('eToken',response.token)
          this._AuthService.saveUserData()

          this._Router.navigate(['/home'])

        }
      },
      error:(err:HttpErrorResponse)=>{
        this.isloading=false
        this.msgError=err.error.error

      }
    })
  }
}


}
