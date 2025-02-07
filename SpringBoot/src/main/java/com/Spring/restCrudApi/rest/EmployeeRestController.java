package com.Spring.restCrudApi.rest;

import com.Spring.restCrudApi.entity.Employee;
import com.Spring.restCrudApi.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class EmployeeRestController {

    private EmployeeService employeeService;
    public EmployeeRestController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return this.employeeService.findAll();
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable int id){
        return this.employeeService.findById(id);
    }

    @PostMapping("/employees")
    public Employee saveEmployee(@RequestBody Employee employee){
        this.employeeService.save(employee);
        return employee;
    }

    @DeleteMapping("/employees/{id}")
    public Employee deleteEmployee(@PathVariable int id){
        Employee e = this.employeeService.findById(id);
        this.employeeService.delete(id);
        return e;
    }

    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee employee){
        Employee updatedEmployee = this.employeeService.save(employee);
        return updatedEmployee;
    }
}
