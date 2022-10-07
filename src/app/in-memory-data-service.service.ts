import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const employees = [
      { id: 12, name: 'abc', location:'Pune',email:'a@gmail.com',mobile:7744048267 },
      { id: 13, name: 'ram' ,location:'Banglore',email:'b@gmail.com',mobile:7744048267},
      { id: 14, name: 'sam',location:'Hyderad',email:'c@gmail.com',mobile:7744048267 },
      { id: 15, name: 'man' ,location:'Pune',email:'d@gmail.com',mobile:7744048267},
    ];
    return {employees};
  }
}
