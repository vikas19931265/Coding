package com.pgm.c1beanfactorypostprocessor;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class ConnectionClient {
	
	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/b9beanfactorypostprocessor/database.xml");
		
		ConnectionUtil connectionUtil = context.getBean("connectionUtil", ConnectionUtil.class);
		connectionUtil.getConnection();
	}

}
