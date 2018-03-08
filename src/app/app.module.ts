import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersDetailComponent } from './customers/customers-detail/customers-detail.component';
import { CustomersDeleteComponent } from './customers/customers-delete/customers-delete.component';
import { CustomersCreateComponent } from './customers/customers-create/customers-create.component';
import { CustomersEditComponent } from './customers/customers-edit/customers-edit.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DataManagerService } from './service/data-manager.service';
import { CustomerComponent } from './customers/customer/customer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    CustomersListComponent,
    CustomersDetailComponent,
    CustomersDeleteComponent,
    CustomersCreateComponent,
    CustomersEditComponent,
    NavBarComponent,
    CustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
