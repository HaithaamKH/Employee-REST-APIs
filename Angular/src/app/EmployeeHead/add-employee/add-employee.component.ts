import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Employee } from '../model/Employee.model';
import{FormsModule} from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  employee!: Employee;
  status:string = "";

  ngOnInit():void{
    this.status = this.service.status;
    if(this.status ==='add'){
      this.employee = {
        id:0 , 
        firstName: "",
        lastName:"",
        email:""
      };
    }else{
      this.employee = this.service.employee;
      this.status =this.service.status;
    }
    console.log(`${JSON.stringify(this.employee)}   ${this.status}`)
  }
  constructor(private service: EmployeeService , private router: Router){}

  saveEmployee(){
    
    if(this.status === 'add'){
      this.service.save(this.employee).subscribe(redirct=>{
        this.router.navigate(["/home"]);
      
      })
    }else{
      this.service.update(this.employee).subscribe(relode=>{
        this.router.navigate(['/']);
      })
    }
  }
  



  
  

}
