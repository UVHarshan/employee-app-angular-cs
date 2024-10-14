import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { Employee } from './services/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeeListComponent,EmployeeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  selectedEmployee: Employee | null = null;
}
