import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Customer} from '../customer';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.css']
})
export class CustomersDetailComponent implements OnInit {

  @Input() selectedCust: Customer;

  constructor() {
   }
  
  ngOnInit() {
  }

}
