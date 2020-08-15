package com.integration.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.integration.dao.EmployeeDAO;
import com.integration.model.Employee;

@Service("employeeService")
public class EmployeeServiceImpl  implements EmployeeService{

	@Autowired
	EmployeeDAO employeeDAO;
	
	@Override
	public void saveEmployee(Employee emp) {

		employeeDAO.saveEmployee(emp);
	}

	@Override
	public List<Employee> findEmployees() {
		
		return employeeDAO.findEmployees();
		
	}

	@Override
	public Employee findEmployeeBySSN(String ssn) {
		return employeeDAO.findEmployeeBySSN(ssn);
	}

	@Override
	public void deleteEmployeeBySSN(String ssn) {
		employeeDAO.deleteEmployeeBySSN(ssn);

	}

	@Override
	public void updateEmployee(Employee employee) {
			employeeDAO.updateEmployee(employee);
	}

}
