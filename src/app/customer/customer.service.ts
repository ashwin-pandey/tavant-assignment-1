import { Injectable } from '@angular/core';
import { CustomerArray } from './mock-customer';
import { Customer } from './customer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerArray: Customer[] = CustomerArray;

  constructor() { }

  getCustomer(id: number) {
    return of(this.customerArray.find(customer => customer.id === id));
  }

  updateCustomer(formData: Customer, id: number) {
    let customerIndex = this.customerArray.findIndex(item => item.id == formData.id);
    this.customerArray[customerIndex] = formData;
    return of(this.customerArray);
  }

  addCustomer(formData) {
    this.customerArray.push(formData);
    // return of(this.customerArray);
    return of("Added new customer!");
  }

  deleteCustomer(id) {
    const index = this.customerArray.findIndex(item => item.id == id);
    return of(this.customerArray.splice(index, 1));
  }

}
