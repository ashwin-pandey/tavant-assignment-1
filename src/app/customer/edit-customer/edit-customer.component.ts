import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  @Input() customer: Customer;

  id: number;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(this.id).subscribe(customer => this.customer = customer);
  }

  updateCustomer(formData) {
    this.customerService.updateCustomer(formData, this.id).subscribe(
      response => {
        this.router.navigate(['/']),
        console.log(formData)
      },
      error => console.log(error.message)
    );
  } 

}
