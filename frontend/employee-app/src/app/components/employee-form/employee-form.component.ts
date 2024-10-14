import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnChanges {
  @Input() employeeToEdit: Employee | null = null;

  employee: Employee = {
    id: 0,
    name: '',
    position: '',
    department: '',
  };

  constructor(private employeeService: EmployeeService) {}

  // This method runs when the component receives a new employeeToEdit
  ngOnChanges(changes: SimpleChanges): void {
    if (this.employeeToEdit) {
      this.employee = { ...this.employeeToEdit };
    }
  }

  onSubmit(): void {
    if (this.employee.id === 0) {
      this.employeeService.addEmployee(this.employee).subscribe((response) => {
        console.log('Employee added successfully', response);
        this.resetForm();
      });
    } else {
      this.employeeService
        .updateEmployee(this.employee)
        .subscribe((response) => {
          console.log('Employee updated successfully', response);
          this.resetForm();
        });
    }
  }

  resetForm(): void {
    this.employee = { id: 0, name: '', position: '', department: '' };
  }
}
