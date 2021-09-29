import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  Employees:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetEmployees().subscribe(response=>{
      console.log(response);
      this.Employees=response;
    });
  }

  deleteLog(id:any, iControl:any) {
    console.log(id);
    console.log(iControl);
    if(window.confirm("Do you wish delete the log?")) {
      this.crudService.DeleteEmployee(id).subscribe((response)=>{
        this.Employees.splice(iControl,1);
      });
    }
  }

}
