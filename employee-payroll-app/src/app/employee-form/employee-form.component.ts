import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee = {
    name: '',
    profileImage: '',
    gender: '',
    departments: [] as string[],
    salary: '',
    startDate: { day: null, month: null, year: null },
    notes: ''
  };

  isEditMode = false;
  editIndex: number | null = null;

  profileImages = [
    'assets/profile1.png',
    'assets/profile2.png',
    'assets/profile3.png',
    'assets/profile4.png'
  ];

  departments = ['HR', 'Sales', 'Finance', 'Engineer', 'Others'];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.editIndex = +params['id'];
        const employeeToEdit = this.employeeService.getEmployees()[this.editIndex];
        if (employeeToEdit) {
          this.employee = { ...employeeToEdit }; // Pre-fill the form with employee data
        }
      }
    });
  }

  onSubmit(): void {
    if (this.isEditMode && this.editIndex !== null) {
      this.employeeService.updateEmployee(this.editIndex, this.employee); // Update the employee
    } else {
      this.employeeService.addEmployee(this.employee); // Add a new employee
    }
    this.router.navigate(['/details']); // Navigate back to the details page
  }

  onReset(): void {
    this.employee = {
      name: '',
      profileImage: '',
      gender: '',
      departments: [] as string[],
      salary: '',
      startDate: { day: null, month: null, year: null },
      notes: ''
    };
  }

  onCancel(): void {
    this.router.navigate(['/details']);
  }

  selectProfileImage(image: string): void {
    this.employee.profileImage = image;
  }

  navigateToDetails(): void {
    this.router.navigate(['/details']);
  }
}