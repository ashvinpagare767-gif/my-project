import { Component, OnInit } from '@angular/core';

interface Employee {
  name: string;
  role: string;
  department: string;
  joined: Date;
  status: 'Active' | 'On leave' | 'Inactive';
}

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss']
})
export class EmployeListComponent implements OnInit {
  employeeFilter = '';
  employees: Employee[] = [
    {
      name: 'Om Sharma',
      role: 'Senior Developer',
      department: 'Engineering',
      joined: new Date(2025, 0, 10),
      status: 'Active'
    },
    {
      name: 'Shubham Karma',
      role: 'Product Manager',
      department: 'Product',
      joined: new Date(2023, 5, 3),
      status: 'On leave'
    },
    {
      name: 'Ayush Kumar',
      role: 'HR Business Partner',
      department: 'HR',
      joined: new Date(2022, 8, 18),
      status: 'Active'
    },
    {
      name: 'Suman Singh',
      role: 'Sales Executive',
      department: 'Sales',
      joined: new Date(2021, 3, 22),
      status: 'Inactive'
    },
    {
      name: 'Meena Kumar',
      role: 'UI Developer',
      department: 'Design',
      joined: new Date(2024, 11, 1),
      status: 'Active'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  filteredEmployees(): Employee[] {
    const term = this.employeeFilter.trim().toLowerCase();
    if (!term) {
      return this.employees;
    }
    return this.employees.filter(emp => {
      return (
        emp.name.toLowerCase().includes(term) ||
        emp.role.toLowerCase().includes(term) ||
        emp.department.toLowerCase().includes(term)
      );
    });
  }


  statusClass(status: Employee['status']): string {
    switch (status) {
      case 'Active':
        return 'badge-success';
      case 'On leave':
        return 'badge-warning';
      case 'Inactive':
        return 'badge-secondary';
      default:
        return 'badge-light';
    }
  }

   getInitials(name: string): string {
    return name
      .split(' ')
      .map(p => p[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

}
