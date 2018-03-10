import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Customer} from '../customer';
import { DataManagerService } from '../../service/data-manager.service';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.css']
})
export class CustomersDetailComponent implements OnInit {

  // @Input() selectedCust: Customer;
  selectedCust:Customer;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private service:DataManagerService) {
      let id=this.route.snapshot.params['id'];
      this.selectedCust=service.getCustomer(id);
   }
  
  ngOnInit() {
  }

}
