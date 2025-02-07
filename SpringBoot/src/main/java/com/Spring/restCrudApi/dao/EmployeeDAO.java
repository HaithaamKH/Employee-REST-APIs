package com.Spring.restCrudApi.dao;

import com.Spring.restCrudApi.entity.Employee;
import java.util.List;
public interface EmployeeDAO {

     List<Employee> findAll();

     Employee findById(Integer id);

     Employee save(Employee employee);

    //public Employee update(Employee employee);

     void delete(Integer id);



}
