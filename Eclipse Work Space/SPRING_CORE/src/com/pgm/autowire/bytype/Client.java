package com.pgm.autowire.bytype;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) 	{
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/autowire/bytype/Employee.xml");
		
		
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

/*
vikas gautam
26.0
30000.0
1234
tamil nadu
9/11
chennai
600114
tamil nadu
9/11
chennai
600114

 * 
 */

