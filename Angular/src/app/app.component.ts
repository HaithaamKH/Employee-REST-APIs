import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './EmployeeHead/employee/employee.component';
import { HeaderComponent } from './EmployeeHead/header/header.component';
import { FooterComponent } from './EmployeeHead/footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employee-RestAPIs';
}
