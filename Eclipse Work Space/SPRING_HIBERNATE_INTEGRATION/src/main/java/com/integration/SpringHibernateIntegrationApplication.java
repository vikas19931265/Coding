package com.integration;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;

import com.integration.model.Employee;
import com.integration.service.EmployeeService;

@SpringBootApplication
@ComponentScan({"com.integration"})
@EnableCaching(proxyTargetClass = true)
public class SpringHibernateIntegrationApplication {

	public static void main(String[] args) {
		ApplicationContext context=SpringApplication.run(SpringHibernateIntegrationApplication.class, args);
		EmployeeService empService=(EmployeeService)context.getBean("employeeService");
	
		// Adding new employee
		
		Employee emp= new Employee();
		emp.setName("Vikas Gautam");
		emp.setSsn("1234");
		
		empService.saveEmployee(emp);
		
		// Finding all the employees
		
		List<Employee> employees=empService.findEmployees();

		for(Employee empl : employees)
		{
			System.out.println(empl.getName() + "\t" + emp.getSsn());
		}
		
		// finding employee by ssn
		
		Employee empl=empService.findEmployeeBySSN("1234");
		System.out.println("employee by ssn is "+ empl.getName());
		
		// Deleting employee based on ssn
		
		empService.deleteEmployeeBySSN("1234");
		System.out.println("employee is deleted");
		
		
	}

}
