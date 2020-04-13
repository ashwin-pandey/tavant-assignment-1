import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerArray } from './mock-customer';

@Component({
  selector: 'app-home',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer = CustomerArray;

	constructor() { }

  ngOnInit() {
	}

}
