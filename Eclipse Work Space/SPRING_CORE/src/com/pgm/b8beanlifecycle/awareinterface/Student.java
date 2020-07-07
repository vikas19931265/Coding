package com.pgm.b8beanlifecycle.awareinterface;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

class Student implements ApplicationContextAware, BeanNameAware {

	private String name;
	private ApplicationContext applicationContext;
	private String beanName;

	public Student() {
		System.out.println("Bean Life cycle first step: Constructor is called.");
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
		System.out.println("Bean life cycle step : setter is called - populating properties");
	}

	public void myDestroy() throws Exception {
		System.out.println("Destory is called, ");
	}

	public void myInit() throws Exception {

		System.out.println("After properties set is called ");

	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {

		this.applicationContext = applicationContext;
		/*
		 * function called as part of spring bean lifecycle.
		 */
	}

	public ApplicationContext getApplicationContext() {
		return applicationContext;
	}

	@Override
	public void setBeanName(String name) {
		this.beanName = name;
		/*
		 * function called by beanlifecycle to set the name of the bean.
		 * 
		 */

	}

	public String getBeanName() {
		return beanName;
	}

}
