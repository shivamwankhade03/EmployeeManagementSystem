import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employeeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    location: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private route : Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService
        .getEmployeeById(Number(id))
        .subscribe((data: Employee) => {
          console.log(data);
          this.employeeForm = new FormGroup({
            id: new FormControl(String(data.id)),
            name: new FormControl(data.name),
            location: new FormControl(data.location),
            mobile: new FormControl(String(data.mobile)),
            email: new FormControl(data.email),
          });
        });
    }
  }

  update(employeeObj: any): void {
    if (!employeeObj) {
      return;
    }

    const { name,location,mobile,email,id} = employeeObj;
    // The server will generate the id for this new hero
    const newEmployee: Employee = {
      'name': name, 'location': location, 'email': email, 'mobile': mobile,
      'id':Number(id)
    } ;
    console.log(newEmployee)
    this.employeeService
      .updateEmployee(newEmployee)
      .subscribe(employee=>
        console.log(employee)
        // employee => this.employees.push(employee)
      );
  }

  onSubmit() {
    this.update(this.employeeForm.value)
    this.route.navigateByUrl("/list");
  }
}
