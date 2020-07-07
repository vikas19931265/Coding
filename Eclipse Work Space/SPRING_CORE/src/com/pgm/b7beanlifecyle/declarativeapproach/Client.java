package com.pgm.b7beanlifecyle.declarativeapproach;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

public static void main(String[] args) {
	
	AbstractApplicationContext context= new ClassPathXmlApplicationContext("com/pgm/b7beanlifecyle/declarativeapproach/Student.xml");
	/*
	 * In the above client application if we are not using AbstractApplicationContext continer
	 *  and registerShutdownHook() method, container won't call destroy() method.
	 */
	Student student=context.getBean("studentBean",Student.class);
	context.registerShutdownHook();
}
	
}

/*
Bean Life cycle first step: Constructor is called.
Bean life cycle step : setter is called - populating properties
After properties set is called 
Destory is called, 

*/