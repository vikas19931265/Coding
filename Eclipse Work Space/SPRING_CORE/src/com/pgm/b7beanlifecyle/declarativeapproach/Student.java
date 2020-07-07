package com.pgm.b7beanlifecyle.declarativeapproach;


 class Student {

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

	public void myDestroy() throws Exception {
		System.out.println("Destory is called, ");
	}

	public void myInit() throws Exception {
		
	System.out.println("After properties set is called ");
	
	}

}
