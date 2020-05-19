import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerArray } from './mock-customer';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { DeleteDialogService } from '../service/delete-dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer = CustomerArray;

  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'address', 'city', 'state', 'edit', 'delete'];
  // dataSource = new MatTableDataSource(CustomerArray);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

	constructor(
    private customerService: CustomerService,
    private router: Router,
    private dialogService: DeleteDialogService
  ) { }

  ngOnInit() {
    // this.dataSource.sort = this.sort;
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

}
