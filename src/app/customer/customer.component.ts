import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerArray } from './mock-customer';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer = CustomerArray;

	constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
	}

  deleteCustomer(id) {
    this.customerService.deleteCustomer(id).subscribe(
      response => {
        console.log(response),
        console.log("Customer with id = " + id + " is removed from the array!"),
        this.router.navigate(['/home'])
      },
      error => {
        console.log(error.message)
      }
    )
  }

}
