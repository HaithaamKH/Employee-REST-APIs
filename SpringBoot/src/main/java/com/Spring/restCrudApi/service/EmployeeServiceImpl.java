package com.Spring.restCrudApi.service;

import com.Spring.restCrudApi.dao.EmployeeDAO;
import com.Spring.restCrudApi.entity.Employee;
import com.Spring.restCrudApi.exception.EmployeeNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeDAO employeeDAO ;
    @Autowired
    public EmployeeServiceImpl(EmployeeDAO employeeDAO){
        this.employeeDAO = employeeDAO;
    }
    @Override
    public List<Employee> findAll() {
        return this.employeeDAO.findAll();
    }

    @Override
    @Transactional
    public Employee save(Employee employee) {
        return this.employeeDAO.save(employee);
    }

    @Override
    public Employee findById(Integer id) {

        if(this.employeeDAO.findById(id)==null){
            throw new EmployeeNotFoundException("Employee With id: "+ id+ " Not Found :(");
        }
        return this.employeeDAO.findById(id);
    }

    @Override
    @Transactional
    public void delete(Integer id) {
        this.employeeDAO.delete(id);

    }
}
