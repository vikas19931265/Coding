package com.pgm.a4constructorInjection.Employee;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/a4constructorInjection/Employee/Employee.xml");
		Employee emp=(Employee)context.getBean("EmployeeBean");
		System.out.println(emp.getName());
		System.out.println(emp.getRollNo());
		Address address = emp.getAddress();
		System.out.println(address.getAddressLine());
		System.out.println(address.getState());
		System.out.println(address.getZipcode());
	}
}

/*
 * vikas gautam
1234
Kabilar Street
Tamil Nadu
600114
*/
