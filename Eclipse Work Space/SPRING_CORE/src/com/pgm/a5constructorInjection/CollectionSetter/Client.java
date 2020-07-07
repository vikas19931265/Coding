package com.pgm.a5constructorInjection.CollectionSetter;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {
	public static void main(String[] args) {

	ApplicationContext context= new ClassPathXmlApplicationContext("com/pgm/a5constructorInjection/CollectionSetter/Student.xml");
	Student student=(Student)context.getBean("StudentBean");
	
	System.out.println(student.getId());
	System.out.println(student.getName());
	System.out.println(student.getCourses());
	System.out.println(student.getFeeDetails());
	System.out.println(student.getMobileNos());
	System.out.println(student.getProp());
	System.out.println(student.getEmptyString());
	System.out.println(student.getNullValue());
	System.out.println(student.getNullValue().length());
				/* we will get a null pointer exception here */
	}
}



/* OUTPUT
 * 200 Ram [CORE AJVA, WBSERVICES, SPRING] {Core java=10000, Webservices=12000,
 * spring=12000} [8888888888, 8888899988, 8888832222, 8888881111] {key3=Value3,
 * key2=Value2, key1=Value1}
 */
