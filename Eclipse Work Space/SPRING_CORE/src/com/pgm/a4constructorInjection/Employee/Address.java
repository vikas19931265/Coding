package com.pgm.a4constructorInjection.Employee;

public class Address {
	private String addressLine;
	private String state;
	private String zipcode;
	
	public Address(String addressLine, String state, String zipcode) {
		this.addressLine=addressLine;
		this.state=state;
		this.zipcode=zipcode;
	}
	
	public String getAddressLine() {
		return addressLine;
	}

	public void setAddressLine(String addressLine) {
		this.addressLine = addressLine;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	
}
