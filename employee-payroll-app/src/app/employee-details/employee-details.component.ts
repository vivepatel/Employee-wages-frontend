import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  navigateToForm(): void {
    this.router.navigate(['/form']);
  }

  editEmployee(index: number): void {
    this.router.navigate(['/form', { id: index }]); // Navigate to form with employee index
  }

  deleteEmployee(index: number): void {
    this.employeeService.deleteEmployee(index); // Delete the employee
    this.employees = this.employeeService.getEmployees(); // Refresh the list
  }
}