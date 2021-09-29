import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeesForm:FormGroup;
  theID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public form:FormBuilder,
    private router:Router
  ) { 
    this.theID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.theID);
    this.crudService.GetEmployee(this.theID).subscribe(
      response=>{
        console.log(response);
        this.employeesForm.setValue({
          name:response[0]['name'],
          email:response[0]['email']
        });
      }
    );

    this.employeesForm=this.form.group(
      {
        name:[''],
        email:['']
      }
    );
  }

  ngOnInit(): void {
  }

  sendData():any{
    console.log(this.theID);
    console.log(this.employeesForm.value);
    this.crudService.EditEmployee(this.theID, this.employeesForm.value).subscribe(()=>{
      this.router.navigateByUrl('/list-employees');
    });
  }

}
