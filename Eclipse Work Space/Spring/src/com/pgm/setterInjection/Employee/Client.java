package com.pgm.setterInjection.Employee;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) 	{
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/setterInjection/Employee/Employee.xml");
		Employee emp=(Employee)context.getBean("EmployeeBean");
		System.out.println(emp.getName());
		System.out.println(emp.getAge());
		System.out.println(emp.getSalary());
		System.out.println(emp.getEmpId());
		Address address = emp.getAddress();
		System.out.println(address.getState());
		System.out.println(address.getHouseno());
		System.out.println(address.getCity());
		System.out.println(address.getZipcode());		
	}
}
