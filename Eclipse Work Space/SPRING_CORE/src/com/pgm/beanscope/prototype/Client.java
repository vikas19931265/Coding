package com.pgm.beanscope.prototype;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) 	{
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/beanscope/prototype/Employee.xml");
		
		// lets get the first object and work with it
		
		Employee emp=(Employee)context.getBean("EmployeeBean");
		System.out.println("emplyoee : "+ emp.hashCode()); //836514715
		emp.getAddress().setCity("banglore");
		System.out.println("address 1" + emp.getAddress().hashCode());
		
		// lets work with second object now
		
		Employee emp2=(Employee)context.getBean("EmployeeBean");
		System.out.println(emp2.hashCode());//1414521932....notice that objects are different now
		System.out.println(emp2.getAddress().getCity()); 
		System.out.println("address 2" + emp2.getAddress().hashCode());
		
		/*
		 * we have moved only the scope of address as prototype lets check if both the object we used are
		 * having the same address object or not.
		 * 
		 * CONCLUSTION : address objects are different because scope is prototype but employee objects are same as scope is singleton.
		 * 
		 * emplyoee : 836514715
			address 11414521932
			836514715
			banglore
			address 21414521932
		 */
		
		
	
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

