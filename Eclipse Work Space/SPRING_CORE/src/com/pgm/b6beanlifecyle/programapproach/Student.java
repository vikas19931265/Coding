package com.pgm.b6beanlifecyle.programapproach;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

 class Student implements  InitializingBean, DisposableBean{

	private String name;

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

	@Override
	public void destroy() throws Exception {
		System.out.println("Destory is called, ");
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		
	System.out.println("After properties set is called ");
	
	}

}
