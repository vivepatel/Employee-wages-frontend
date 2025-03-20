import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: any[] = [];

  getEmployees(): any[] {
    return this.employees;
  }

  addEmployee(employee: any): void {
    this.employees.push(employee);
  }

  updateEmployee(index: number, updatedEmployee: any): void {
    this.employees[index] = updatedEmployee;
  }

  deleteEmployee(index: number): void {
    this.employees.splice(index, 1);
  }
}