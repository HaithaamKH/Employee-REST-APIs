package com.Spring.restCrudApi.dao;

import com.Spring.restCrudApi.entity.Employee;
import com.Spring.restCrudApi.exception.EmployeeNotFoundException;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmployeeImpl implements EmployeeDAO{
    private EntityManager entityManager ;

    @Autowired
    public EmployeeImpl(EntityManager e){
        this.entityManager = e;
    }
    @Override
    public List<Employee> findAll() {
        TypedQuery<Employee> employees = this.entityManager
                .createQuery("from Employee" , Employee.class);
        return employees.getResultList();
    }

    @Override
    public Employee findById(Integer id) {
        Employee foundEmployee = this.entityManager.find(Employee.class , id);
        return foundEmployee;
    }

    @Override
    public Employee save(Employee employee) {
        return this.entityManager.merge(employee);
    }

    @Override
    public void delete(Integer id) {
        Employee employee = this.findById(id);
        this.entityManager.remove(employee);
    }



}
