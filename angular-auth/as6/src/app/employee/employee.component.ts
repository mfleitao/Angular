import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeRaw } from '../data/employee.raw';
import { Position } from '../data/position';
import { EmployeeService } from '../data/employee.service';
import { PositionService } from '../data/position.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  paramSubscription: any;
  employeeSubscription: any;
  getPositionsSubcription: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Position[];
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private employeeService: EmployeeService, 
    private positionService: PositionService
    ) { }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe((params) => {
      this.employeeSubscription = this.employeeService.getEmployee(params['_id']).subscribe((emp) => {
        this.employee = emp[0];
      });
      this.getPositionsSubcription = this.positionService.getPositions().subscribe((position) => {
        this.positions = position;
      });
    });
  }

  onSubmit() {
    this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe((res) => {
      this.successMessage = true;
      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    }, (err) => {
      this.failMessage = true;
      setTimeout(() => {
        this.failMessage = false;
      }, 2500);
    });
  }

  ngOnDestroy() {
    if (this.paramSubscription != 'undefined') 
      this.paramSubscription.unsubscribe();
    
    if (this.employeeSubscription != 'undefined') 
      this.employeeSubscription.unsubscribe();
    
    if (this.getPositionsSubcription != 'undefined') 
      this.getPositionsSubcription.unsubscribe();
    
    if (this.saveEmployeeSubscription != 'undefined') 
      this.saveEmployeeSubscription.unsubscribe();
  }

}
