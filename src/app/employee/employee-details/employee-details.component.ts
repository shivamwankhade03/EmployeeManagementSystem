import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee :Employee ={
    id: 0,
    name: '',
    location: '',
    email: '',
    mobile: 0
  }
  constructor( 
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private route : Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService
        .getEmployeeById(Number(id))
        .subscribe((data: Employee) => {
          console.log(data);
          this.employee = {
            id: data.id,
            name: data.name,
            location: data.location,
            email: data.email,
            mobile: data.mobile
          }
        });
    }
  }

}
