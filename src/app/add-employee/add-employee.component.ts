import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators   } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    location: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private route:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }
  add(employeeObj: any): void {
    if (!employeeObj) {
      return;
    }

    const { name,location,mobile,email,id} = employeeObj;
    // The server will generate the id for this new hero
    const newEmployee: Employee = {
      'name': name, 'location': location, 'email': email, 'mobile': mobile,
      'id':id
    } ;
    this.employeeService
      .addEmployee(newEmployee)
      .subscribe(
        // employee => this.employees.push(employee)
      );
  }
  onSubmit() {
    console.warn(this.employeeForm.value);
    this.add(this.employeeForm.value)
    this.route.navigateByUrl("/list");
  }
}
