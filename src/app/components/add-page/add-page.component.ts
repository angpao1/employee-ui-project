import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  Form: FormGroup;

  constructor(private service: EmployeeService, private form: FormBuilder) {

  }

  ngOnInit() {
    this.Form = this.form.group({
      employeeId: '',
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      sex: ''
    });
  }

  save(employeeId, firstname, lastname, email, age, sex) {

    const data = {
      employeeId: employeeId,
      firstName: firstname,
      lastName: lastname,
      email: email,
      age: age,
      sex: sex
    }

    console.log(data)
  }

}
