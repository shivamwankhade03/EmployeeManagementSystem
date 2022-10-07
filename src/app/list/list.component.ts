import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor (private employeeService:EmployeeService,private router:Router){}
 
  employees: Employee[] = [];
  employeeName = '';
  ngOnInit() {
    this.getEmployees();
  }
  
  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => (this.employees = employees));
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
  }

  search(searchTerm: string) {
    // if (searchTerm) {
    //   this.employees = this.employees.filter(h => h.name == searchTerm);
    // } else {
    //   this.getEmployees();
    // }
  
    if (searchTerm) {
      this.employeeService
        .searchEmployees(searchTerm)
        .subscribe(heroes => (this.employees = heroes));
    } else {
      this.getEmployees();
    }
    
  }


}
