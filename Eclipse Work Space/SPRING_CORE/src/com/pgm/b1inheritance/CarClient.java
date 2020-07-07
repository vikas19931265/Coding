package com.pgm.b1inheritance;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CarClient {
	
	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/b1inheritance/inheritance.xml");
		
		Car parentCar = context.getBean("parentCar", Car.class);
		/*
		 * We cannot create a bean of parent car here because parentCar is declared as abstract.
		 * 
		 */
		
		parentCar.showCarDetails();
	}
}
