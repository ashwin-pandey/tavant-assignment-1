import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CdkTableModule } from '@angular/cdk/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { MenuComponent } from './menu/menu.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { MatConfirmDialogComponent } from './utilities/mat-confirm-dialog/mat-confirm-dialog.component';


const MaterialImports = [
  CdkTableModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatIconModule
]


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MenuComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialImports
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule { }
