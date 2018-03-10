import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersCreateComponent } from './customers/customers-create/customers-create.component';
import { Page404Component } from './pages/page404/page404.component';
import { CustomersDetailComponent } from './customers/customers-detail/customers-detail.component';
import { CustomersEditComponent } from './customers/customers-edit/customers-edit.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent },
  {path: 'customers',component:CustomersListComponent },
  {path: 'customerdetail/:id', component: CustomersDetailComponent },
  {path: 'customeredit/:id', component: CustomersEditComponent },
  {path: 'customercreate',component:CustomersCreateComponent },
  {path: '',redirectTo:'/home',pathMatch:'full'},
  {path: '**',component:Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
