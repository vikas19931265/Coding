package com.integration.service;

import java.util.List;

import com.integration.model.Employee;



public interface EmployeeService {

	public void saveEmployee(Employee employee);
    
	public List<Employee> findEmployees();
    
	public Employee findEmployeeBySSN(String ssn);
    
	public void deleteEmployeeBySSN(String ssn);
    
	public void updateEmployee(Employee employee);

}



