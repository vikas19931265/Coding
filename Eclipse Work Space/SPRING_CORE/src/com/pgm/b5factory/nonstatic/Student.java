package com.pgm.b5factory.nonstatic;

public class Student {
	private int id=123456;
	private String name;
	
	private  Student() {  // please note that spring uses reflection api, therefore it can call private constructor, 
						  // though its always good practice to use the factory method

	System.out.println("default constructor is called.");
	
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public   Student getStudentInstance()
	{
		System.out.println("calling the getinstance");
		return new Student();
		
		/*
		 * this is our non static factory method, we are going to call it from a dummy bean. From normal java its not
		 * possible as our constructor is private here.
		 * 
		 * 
		 */
	}

}
