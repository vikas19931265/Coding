package com.pgm.b5factory.nonstatic;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/b5factory/nonstatic/Student.xml");
		
		
		/* System.out.println(student.getId()); */
		
	
	}
	
}
/*
default constructor is called.
calling the getinstance

	notice how the factory method was called using dummy student object
default constructor is called.


question
==========

here factory method returned a new object ..how can we access that object....??
*/

