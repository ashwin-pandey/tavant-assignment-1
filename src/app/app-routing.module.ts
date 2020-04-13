import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';


const routes: Routes = [
  { path:"", component: CustomerComponent },
  { path:"customer/new", component: AddCustomerComponent },
  { path:"customer/edit/:id", component: EditCustomerComponent },
  { path:"**", component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
