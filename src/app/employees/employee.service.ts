import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPaths, environment} from "../../assets/config/environment";
import {map} from "rxjs/operators";
import {DeleteResponse, Response, ResponseList} from "../shared/models/response.model";
import {Employee} from "../shared/models/employee.model";
import {Overlay} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }


   getEmployees(): Observable<ResponseList<Employee>> {
    const GET_EMPLOYEES_URL = `${this.baseUrl}${ApiPaths.GET_EMPLOYEES}`;
    return this.httpClient.get<ResponseList<Employee>>(GET_EMPLOYEES_URL);
   }

   updateEmployee(employee: Employee): Observable<Response<Employee>> {
    const UPDATE_EMPLOYEE_URL = `${this.baseUrl}${ApiPaths.UPDATE_EMPLOYEE}/${employee.id}`;
    return this.httpClient.put<Response<Employee>>(UPDATE_EMPLOYEE_URL, employee, {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }});
   }

  addEmployee(employee: Employee): Observable<Response<Employee>> {
    const ADD_EMPLOYEE_URL = `${this.baseUrl}${ApiPaths.CREATE_EMPLOYEE}`;
    return this.httpClient.post<Response<Employee>>(ADD_EMPLOYEE_URL, employee, {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }});
  }

   deleteEmployee(employeeId: number): Observable<DeleteResponse> {
    const DELETE_EMPLOYEE_URL =`${this.baseUrl}${ApiPaths.DELETE_EMPLOYEE}/${employeeId}`;
    return this.httpClient.delete<DeleteResponse>(DELETE_EMPLOYEE_URL);
   }
}
