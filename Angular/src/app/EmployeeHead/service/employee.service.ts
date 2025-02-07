import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = "http://localhost:8080/api/employees";
  private _employee!: Employee;
  private _status = "add";
  constructor(private http: HttpClient) { }

  getAll():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl);
  }

  save(employee : Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl ,employee );
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  update(employee: Employee):Observable<Employee>{
    return this.http.put<Employee>(this.apiUrl,employee);
  }
  getById(id:number):Observable<Employee>{ 
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  public get employee():Employee{
    return this._employee;
  }
  public set employee(employee: Employee){
     this._employee = employee;
  }
  public get status():string{
    return this._status;
  }
  public set status(status: string){
     this._status =status ;
  }
}
