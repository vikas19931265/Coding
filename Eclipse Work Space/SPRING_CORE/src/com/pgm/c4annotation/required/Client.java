package com.pgm.c4annotation.required;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/c4annotation/required/Student.xml");
		Student student = context.getBean("studentBean", Student.class);
		System.out.println(student.getId()); // Tamil nadu
		
		/*
		 * We have set address as the required property and hence if this value is not set by dependecy injection
		 * then we are going to get exception.
		 * Exception in thread "main" org.springframework.beans.factory.BeanCreationException: 
		 * Error creating bean with name 'studentBean' defined in class path resource 
		 * [com/pgm/c4annotation/required/Student.xml]: Initialization of bean failed; nested
		 *  exception is org.springframework.beans.factory.BeanInitializationException: Properties 
		 *  'address' and 'id' are required for bean 'studentBean'
		 *  
		 *  This feature has been deprecated in 5.1 version of spring, which we will discuss later.
		 */

	}
}

/*
 * 1234
 */ 
