package com.pgm.b4factory.staatic;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/b4factory/staatic/Alaram.xml");
		Alaram alarm= context.getBean("alarambean",Alaram.class);
		System.out.println(alarm.getCalendar().getTime());
		
	}
	
}

/*
 * Sat Jul 04 12:17:14 IST 2020
*/
