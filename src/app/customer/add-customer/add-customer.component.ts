import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer[];

  // showLoadingIndicator: boolean;

  maxDate = new Date();

  id: number;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  nextId() {
    this.id = this.customerService.customerArray.length + 1;
  }

  ngOnInit() {
    this.nextId();
  }

  addCustomer(formData) {
    // console.log(formData);
    this.customerService.addCustomer(formData).subscribe(
      response => {
        this.customerService.messageType = "success",
        this.customerService.message = "New customer added successfully!",
        this.router.navigate(['/']),
        console.log(response)
      },
      error => {
        this.customerService.messageType = "danger",
        this.customerService.message = "Could not add the new customer! Please try again later!",
        this.router.navigate(['/']),
        console.log(error.message)
      }
    );
  }

}
