package com.pgm.a4constructorInjection.Employee;

public class Employee {
 private String name;
 private String rollNo;
 private Address address;
 
 public Employee(String name, String rollNo, Address address) {
	 this.name=name;
	 this.address=address;
	 this.rollNo=rollNo;
 }

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getRollNo() {
	return rollNo;
}

public void setRollNo(String rollNo) {
	this.rollNo = rollNo;
}

public Address getAddress() {
	return address;
}

public void setAddress(Address address) {
	this.address = address;
}
}
