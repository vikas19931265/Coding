package com.pgm.b8beanlifecycle.awareinterface;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

public static void main(String[] args) {
	
	AbstractApplicationContext context= new ClassPathXmlApplicationContext("com/pgm/b8beanlifecycle/awareinterface/Student.xml");
	Student student=context.getBean("studentBean",Student.class);
	ApplicationContext contextDetails=student.getApplicationContext();
	String[] beans=context.getBeanDefinitionNames();
	for(String bean: beans)
	{
		System.out.println(bean); //studentBean
	}
	String beanName=student.getBeanName();
	System.out.println("bean name is " + beanName); //bean name is studentBean
	context.registerShutdownHook();
}
	
}

/*
Bean Life cycle first step: Constructor is called.
Bean life cycle step : setter is called - populating properties
After properties set is called 
Destory is called, 

*/