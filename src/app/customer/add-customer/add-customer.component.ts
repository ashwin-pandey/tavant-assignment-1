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
    this.customerService.addCustomer(formData).subscribe(
      response => {
        this.router.navigate(['/']),
        console.log(response)
      },
      error => console.log(error.message)
    );
  }

}
