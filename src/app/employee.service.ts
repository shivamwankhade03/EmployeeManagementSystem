import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Employee } from '../app/employee/employee';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeUrl = 'api/employees';  // URL to web api

  constructor(
    private http: HttpClient,
    ) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeUrl)
      .pipe(
        retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
      );
  }

  getEmployeeById(id:number): Observable<Employee> {
    const url = `${this.employeUrl}/${id}`; 
    return this.http.get<Employee>(url)
      .pipe(
        retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
      );
  }
  searchEmployees(employeeName: string): Observable<Employee[]> {
    employeeName = employeeName.trim();

    const options = employeeName ?
     { params: new HttpParams().set('name', employeeName) } : {};

    return this.http.get<Employee[]>(this.employeUrl, options)
      .pipe(
        retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
      );
  
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeUrl, employee)
    .pipe(
      retry(2),
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError(error);
    })
    );
  }

  deleteHero(id: number): Observable<unknown> {
    const url = `${this.employeUrl}/${id}`; 
    return this.http.delete(url)
    .pipe(
      retry(2),
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError(error);
    })
    );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.employeUrl, employee)
    .pipe(
      retry(2),
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError(error);
    })
    );
  }
}
