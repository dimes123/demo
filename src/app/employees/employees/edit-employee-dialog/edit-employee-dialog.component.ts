import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../../../shared/models/employee.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../employee.service";

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent implements OnInit {

  employeeEditForm = new FormGroup({
    employee_name: new FormControl('', Validators.required),
    employee_salary: new FormControl('', Validators.required),
    employee_age: new FormControl('', Validators.required),
    profile_image: new FormControl(''),
  });

  employee = {} as Employee;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {employee: Employee},
    private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
  ) {
    this.employee = this.data.employee;
    this.employeeEditForm.patchValue(this.employee);
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.employeeEditForm?.valid) {
      const temp = Object.assign({...this.employee}, this.employeeEditForm.value) as Employee;
      this.employeeService.updateEmployee(temp).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

}
