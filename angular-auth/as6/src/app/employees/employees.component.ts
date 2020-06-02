import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
  loadingError: boolean = false;
  filteredEmployees: Employee[];

  constructor(private service: EmployeeService, private router: Router) { }

  routeEmployee(id: string) {
    this.router.navigate(['employee/', id]);
  }

  onEmployeeSearchKeyUP(event: any) {
    let str : string = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter((e) => (
      (e.FirstName.toLowerCase().indexOf(str) !== -1 ) || 
      (e.LastName.toLowerCase().indexOf(str) !== -1) || 
      (e.Position["PositionName"].toLowerCase().indexOf(str) != -1))
    );
  }

  ngOnInit() {
    this.getEmployeesSub = this.service.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = data;
    }, (err) => {
      this.loadingError = true;
    });
  }

  ngOnDestroy() {
    this.getEmployeesSub.unsubscribe();
  }

}
