import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/Employee.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';




@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

constructor(private service: EmployeeService , private router: Router){}

  employees: Employee[] = [];
  
  ngOnInit(): void {
      this.service.getAll().subscribe(data=>{
        this.employees=data;
        this.router.navigate(["/"])
      })
  }

  goToAddPage():void{
    this.service.status='add';
    this.router.navigate(["/add"]);  
  }

  onDeleteEmployee(id:number){
    const confirm = window.confirm("Do u want to delete Employee ?");
    if(confirm){
    this.service.delete(id).subscribe(relode=>{
      this.ngOnInit();
    })
  }
  }

  viewEmployee(id: number): void {
    
    const foundEmployee = this.employees.find(emp => emp.id === id);
    if (foundEmployee) {
      this.service.employee=foundEmployee;
      this.service.status = "view";
      console.log(`${this.service.status} ${JSON.stringify(foundEmployee)}`);
      this.router.navigate(["/view"]);
    } else {
      console.error(`Employee with ID ${id} not found.`);
    }
  }

  editEmployee(id:number){
    const foundEmployee = this.employees.find(emp=> emp.id === id);
    if(foundEmployee){
      this.service.employee=foundEmployee;
      this.service.status='edit';

      this.router.navigate(["/edit"]);
    }else{
      console.log(`No Employee found with id : ${id}`);
    }
  }
}
