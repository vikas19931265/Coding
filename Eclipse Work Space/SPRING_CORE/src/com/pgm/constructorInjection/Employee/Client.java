package com.pgm.constructorInjection.Employee;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/constructorInjection/Employee/Employee.xml");
		Employee emp=(Employee)context.getBean("EmployeeBean");
		System.out.println(emp.getName());
		System.out.println(emp.getRollNo());
		Address address = emp.getAddress();
		System.out.println(address.getAddressLine());
		System.out.println(address.getState());
		System.out.println(address.getZipcode());
	}
}
