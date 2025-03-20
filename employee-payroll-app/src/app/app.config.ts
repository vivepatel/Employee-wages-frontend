import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'form/:id', component: EmployeeFormComponent }, // Route for editing
      { path: 'form', component: EmployeeFormComponent }, // Route for adding
      { path: 'details', component: EmployeeDetailsComponent }, // Details Page
      { path: '', redirectTo: '/details', pathMatch: 'full' } // Default route
    ])
  ]
};