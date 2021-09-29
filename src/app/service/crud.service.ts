import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/employees/'; //php api CRUD ( API )
  constructor(private httpClient:HttpClient) { }

  AddEmployee(employeeData:Employee):Observable<any> {
    return this.httpClient.post(this.API+"?insert=1",employeeData);
  }

  GetEmployees() {
    return this.httpClient.get(this.API);
  }

  DeleteEmployee(id:any):Observable<any> {
    return this.httpClient.get(this.API+"?delete="+id);
  }

  GetEmployee(id:any):Observable<any> {
    return this.httpClient.get(this.API+"?consult="+id);
  }

  EditEmployee(id:any, employeeData:any):Observable<any> {
    return this.httpClient.post(this.API+"?update="+id, employeeData);
  }
}
