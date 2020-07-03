package com.pgm.autowire.byname;

public class Employee {
	
	private long empId;
	private String name;
	private double age;
	private double salary;
	private Address address;
	private Address tempAddress;
	
	public Address getTempAddress() {
		return tempAddress;
	}

	public void setTempAddress(Address tempAddress) {
		this.tempAddress = tempAddress;
	}

	public long getEmpId() {
		return empId;
	}

	public void setEmpId(long empId) {
		this.empId = empId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getAge() {
		return age;
	}

	public void setAge(double age) {
		this.age = age;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	
	

}