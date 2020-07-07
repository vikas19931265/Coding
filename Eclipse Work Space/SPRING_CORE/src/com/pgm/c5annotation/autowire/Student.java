package com.pgm.c5annotation.autowire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Required;

public class Student {
	private int id;
	private Address address;
	@Autowired @Qualifier("secondaryaddressBean") private Address secondaryAddress;
	/*
	 * 
	 * NOTE: when using autowired no need to use the setter.
	 * Spring container automatically assign values to corresponding properties.
	 * You don't need setter methods for that property.
	 */

	public Address getSecondaryAddress() {
		return secondaryAddress;
	}
	public void setSecondaryAddress(Address secondaryAddress) {
		this.secondaryAddress = secondaryAddress;
	}
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


}
