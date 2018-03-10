import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { DataManagerService } from '../../service/data-manager.service';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit {


  customer: Customer = new Customer();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: DataManagerService) {
    let id = this.route.snapshot.params['id'];
    Object.assign(this.customer,service.getCustomer(id));
  }

  ngOnInit() {
  }

  onClickAdd() {
    this.service.editCustomer(this.customer);
    this.router.navigate(["/customerdetail/"+this.customer.id]);
  }

  backToDetails()
  {
    this.router.navigate(["/customerdetail/"+this.customer.id]);    
  }

}
