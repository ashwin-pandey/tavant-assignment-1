import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerArray } from './mock-customer';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { DeleteDialogService } from '../service/delete-dialog.service';
import { MatTableDataSource, MatPaginator, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // customer = CustomerArray;

  displayedColumns: string[] = ['select', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'address', 'city', 'state', 'edit', 'delete'];
  dataSource = new MatTableDataSource(CustomerArray);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // message: string;
  // messageType: string;

	constructor(
    private customerService: CustomerService,
    private router: Router,
    private dialogService: DeleteDialogService,
    private snakbar: MatSnackBar
  ) { }

  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    if (this.customerService.message !== "" && this.customerService.messageType !== "") {
      this.snakbar.open(this.customerService.message, "close", {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: this.customerService.messageType
      })
    }

    // this.message = this.customerService.message;
    // this.messageType = this.customerService.messageType;
  }

  onDelete(id) {
    this.dialogService.openConfirmDialog().afterClosed().subscribe(
      res => {
        console.log(res)
        if(res) {
          this.deleteCustomer(id);
        }
      }
    );
  }

  deleteCustomer(id) {
    this.customerService.deleteCustomer(id).subscribe(
      response => {
        console.log(response),
        console.log("Customer with id = " + id + " is removed from the array!"),
        this.router.navigate(['/'])
      },
      error => {
        console.log(error.message)
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
