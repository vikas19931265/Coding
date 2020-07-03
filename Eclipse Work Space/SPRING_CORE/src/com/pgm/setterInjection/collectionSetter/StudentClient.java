package com.pgm.setterInjection.collectionSetter;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class StudentClient {
	public static void main(String[] args) {

	ApplicationContext context= new ClassPathXmlApplicationContext("com/pgm/setterInjection/collectionSetter/Student.xml");
	Student student=(Student)context.getBean("StudentBean");
	
	System.out.println(student.getId());
	System.out.println(student.getName());
	System.out.println(student.getCourses());
	System.out.println(student.getFeeDetails());
	System.out.println(student.getMobileNos());
	System.out.println(student.getProp());
	}
}

/* OUTPUT
 * 1234 vikas [java, dbms, C] {java=10000, dbms=20000, C=30000} [12245,
 * 7092198242] {key3=3, key2=2, key1=1}
 * 
 */