import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees/employees.component';
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteEmployeeDialogComponent } from './employees/employees/delete-employee-dialog/delete-employee-dialog.component';
import { EditEmployeeDialogComponent } from './employees/employees/edit-employee-dialog/edit-employee-dialog.component';
import { AddEmployeeDialogComponent } from './employees/employees/add-employee-dialog/add-employee-dialog.component';
import {MatModule} from "./shared/mat/mat.module";

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DeleteEmployeeDialogComponent,
    EditEmployeeDialogComponent,
    AddEmployeeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
