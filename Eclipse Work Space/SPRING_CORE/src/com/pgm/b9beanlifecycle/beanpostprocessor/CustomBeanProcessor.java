package com.pgm.b9beanlifecycle.beanpostprocessor;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class CustomBeanProcessor implements BeanPostProcessor{

	@Override
	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("Before initialization");
		
		/*
		 * Using this concept only annotation are built. example required annotation is a kind of beanpost
		 * processor, which checks before initialization of value if dependency is injected or not.
		 * 
		 * This is also a part of bean lifecycle.
		 * 
		 */
	
	return bean;
	
	}

	@Override
	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
	
	System.out.println("After bean initializtion");
	
	/*
	 * we can change the values set after the initialization here, useful for validation purposes.
	 * 
	 */
	
	return bean;
	
	
	}
	
	

}
