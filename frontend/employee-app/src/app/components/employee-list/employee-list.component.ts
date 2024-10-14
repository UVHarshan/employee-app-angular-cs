import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;

  @Output() edit = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  editEmployee(employee: Employee): void {
    this.selectedEmployee = { ...employee };
    console.log(this.selectedEmployee);
    this.edit.emit(this.selectedEmployee);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter((emp) => emp.id !== id);
    });
  }
}
