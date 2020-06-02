import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../data/employee.service';
import { Employee } from '../data/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean;

  constructor(private service: EmployeeService) {
    this.getEmployeesSub = '';
    this.loadingError = false;
  }

  ngOnInit() {
    this.getEmployeesSub = this.service.getEmployees().subscribe((data) => {
      this.employees = data;
    }, (err) => {
      this.loadingError = true;
    });
  }

  ngOnDestroy() {
    this.getEmployeesSub.unsubscribe();
  }

}
