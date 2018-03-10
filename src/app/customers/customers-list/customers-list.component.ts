import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../../service/data-manager.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import {routes} from '../../app-routing.module';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];
  
  // Assuming that the component 
// has a property/field named "customers"...
constructor(private m: DataManagerService, private router: Router) {
  // Fetch the customers from the service,
  // and assign the value to the class property "customers"
  this.customers = this.m.getCustomers();
}

  ngOnInit() {
  }

  onClick(c: Customer) {
    this.router.navigate(['/customerdetail',c.id]);
  }
}
