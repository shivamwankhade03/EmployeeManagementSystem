import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'add',component:AddEmployeeComponent},
  {path:'edit/:id',component:EditEmployeeComponent},
  {path:'list',component:ListComponent},
  {path:'details/:id',component:EmployeeDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
