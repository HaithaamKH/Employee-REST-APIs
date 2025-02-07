package com.Spring.restCrudApi.service;

import com.Spring.restCrudApi.entity.Employee;
import java.util.List;
public interface EmployeeService {

     List<Employee> findAll();

     Employee save(Employee employee);

     Employee findById(Integer id);

     void delete(Integer id);
}
