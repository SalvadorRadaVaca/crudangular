import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeesForm:FormGroup;

  constructor(
    public form:FormBuilder,
    private crudService:CrudService,
    private router:Router
    ) {
    this.employeesForm=this.form.group({
      name:[''],
      email:['']
    });
  }

  ngOnInit(): void {
  }

  sendData():any {
    console.log("you pressioned me");
    console.log(this.employeesForm.value);

    this.crudService.AddEmployee(this.employeesForm.value).subscribe(response=>{
      this.router.navigateByUrl('/list-employees');
    });
    
  }

}
