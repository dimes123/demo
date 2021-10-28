import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../../shared/models/employee.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {_MatDialogBase, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {DeleteEmployeeDialogComponent} from "./delete-employee-dialog/delete-employee-dialog.component";
import {EditEmployeeDialogComponent} from "./edit-employee-dialog/edit-employee-dialog.component";
import {AddEmployeeDialogComponent} from "./add-employee-dialog/add-employee-dialog.component";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  dataSource = new MatTableDataSource<Employee>();

  displayedColumns = [
    "id",
    "employee_name",
    "employee_salary",
    "employee_age",
    "profile_image",
    "edit",
    "delete",
  ];

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  employeeList: Employee[] = [];
  constructor(
    private employeesService: EmployeeService,
    private dialog: MatDialog,
  ) {
    this.getEmployees();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDeleteEmployeeDialog(employeeId: number, employeeName: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = {employeeId: employeeId, employeeName: employeeName};

    const dialog = this.dialog.open(DeleteEmployeeDialogComponent, dialogConfig);
    this.closeAndGetEmployees(dialog);
  }

  openEditEmployeeDialog(employee: Employee) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '500px';
    dialogConfig.data = {employee: employee};

    const dialog = this.dialog.open(EditEmployeeDialogComponent, dialogConfig);
    this.closeAndGetEmployees(dialog);
  }

  openAddEmployeeDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '500px';

    const dialog = this.dialog.open(AddEmployeeDialogComponent, dialogConfig);
    this.closeAndGetEmployees(dialog);
  }

  closeAndGetEmployees(dialog: MatDialogRef<any>) {
    dialog.afterClosed().subscribe(() => {
      this.getEmployees();
    });
  }


  getEmployees() {
    this.employeesService.getEmployees().subscribe((resp) => {
      this.employeeList = resp.data;
      this.dataSource = new MatTableDataSource<Employee>(this.employeeList);
      this.dataSource.sort = this.sort || null;
      this.dataSource.paginator = this.paginator || null;
    })
  }

}
