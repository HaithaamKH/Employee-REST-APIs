import { Routes } from '@angular/router';
import { EmployeeComponent } from './EmployeeHead/employee/employee.component';
import { AddEmployeeComponent } from './EmployeeHead/add-employee/add-employee.component';

export const routes: Routes = [
    {path:'' , component: EmployeeComponent},
    {path:'add' , component: AddEmployeeComponent},
    {path:'view' , component: AddEmployeeComponent},
    {path:'edit' , component: AddEmployeeComponent},
    {path:'home' , component: EmployeeComponent},
];
