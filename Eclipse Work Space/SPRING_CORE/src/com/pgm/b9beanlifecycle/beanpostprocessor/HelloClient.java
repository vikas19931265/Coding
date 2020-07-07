package com.pgm.b9beanlifecycle.beanpostprocessor;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HelloClient {
	
	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/b9beanlifecycle/beanpostprocessor/BeanProcessor.xml");
		HelloBean bean = context.getBean("helloBean", HelloBean.class);
		System.out.println(bean.getMessage());
		context.registerShutdownHook();
	}
}


/*
HelloBean constructor...
setMessage
Before initialization
myInit called..
After bean initializtion
good morning
myDestroy called.

*/