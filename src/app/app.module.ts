import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminLoginComponent } from './accounts/admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { SharedModule } from './admin/layouts/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeleteAllVechicleComponent } from './admin/components/busyVehicles/delete-all-vechicle/delete-all-vechicle.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NotFoundComponent,
    DeleteAllVechicleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule ,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,



  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
