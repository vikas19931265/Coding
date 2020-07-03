package com.pgm.beanscope.singleton;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) 	{
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/beanscope/singleton/Employee.xml");
		
		// lets get the first object and work with it
		
		Employee emp=(Employee)context.getBean("EmployeeBean");
		System.out.println(emp.hashCode()); //836514715
		emp.getAddress().setCity("banglore");
		
		// lets work with second object now
		
		Employee emp2=(Employee)context.getBean("EmployeeBean");
		System.out.println(emp2.hashCode());//836514715
		System.out.println(emp2.getAddress().getCity()); 
		// if one reference  changes value of object then it will reflect in other references also since its singleton.
		
	
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

