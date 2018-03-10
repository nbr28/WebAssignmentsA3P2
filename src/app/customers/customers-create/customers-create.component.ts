import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { DataManagerService } from '../../service/data-manager.service';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css']
})
export class CustomersCreateComponent implements OnInit {

  customer: Customer = new Customer();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: DataManagerService) {
  }

  ngOnInit() {
  }

  onClickAdd() {
    this.service.addNewCustomer(this.customer);
    this.router.navigate(["/customers"]);
  }

}
