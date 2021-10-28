import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../employee.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../../../shared/models/employee.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.scss']
})
export class AddEmployeeDialogComponent implements OnInit {

  addEditForm = new FormGroup({
    employee_name: new FormControl('', Validators.required),
    employee_salary: new FormControl('', Validators.required),
    employee_age: new FormControl('', Validators.required),
    profile_image: new FormControl(''),
  });

  constructor(private employeeService: EmployeeService,
              private _snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddEmployeeDialogComponent>,) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.addEditForm?.valid) {
      const temp = this.addEditForm.value as Employee;
      this.employeeService.addEmployee(temp).subscribe((resp) => {
        this._snackBar.open(`${resp.message}`, 'X', {
          duration: 5000
        })
        this.dialogRef.close();
      });
    }
  }

}
