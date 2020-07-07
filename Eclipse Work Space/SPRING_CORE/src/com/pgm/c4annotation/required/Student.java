package com.pgm.c4annotation.required;

import org.springframework.beans.factory.annotation.Required;

public class Student {
	private int id;
	private Address address;

	public int getId() {
		return id;
	}
	@Required
	public void setId(int id) {
		this.id = id;
	}

	public Address getAddress() {
		return address;
	}

	@Required
	public void setAddress(Address address) {
		this.address = address;
	}

}
