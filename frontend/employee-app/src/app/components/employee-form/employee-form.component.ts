import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  employee: Employee = {
    id: 0,  
    name: '',
    position: '',
    department: ''
  };

  constructor(private employeeService: EmployeeService) {}

  onSubmit(): void {
    this.employeeService.addEmployee(this.employee).subscribe((response) => {
      console.log('Employee added successfully', response);
      this.employee = { id: 0, name: '', position: '', department: ''};
    });
  }
}
