import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EmployeeService} from "../../employee.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete-employee-dialog',
  templateUrl: './delete-employee-dialog.component.html',
  styleUrls: ['./delete-employee-dialog.component.scss']
})
export class DeleteEmployeeDialogComponent {

  employeeName = '';
  employeeId = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {employeeId: number, employeeName: string},
    private dialogRef: MatDialogRef<DeleteEmployeeDialogComponent>,
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar
  ) {
    this.employeeId = this.data.employeeId;
    this.employeeName = this.data.employeeName;
  }

  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.employeeId).subscribe(resp => {
      if (resp.status === 'success') {
        this._snackBar.open(`Successfully deleted employee ${this.employeeName}`, 'X', {
          duration: 5000
        })
      } else {
        this._snackBar.open(`${resp.message}`, 'X', {
          duration: 5000
        })
      }
    });
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }

}
