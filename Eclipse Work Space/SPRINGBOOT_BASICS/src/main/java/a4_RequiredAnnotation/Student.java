package a4_RequiredAnnotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Student {

	private int rollNo;
	
	@Autowired
	private Address address;

	public int getRollNo() {
		return rollNo;
	}

	public void setRollNo(int rollNo) {
		this.rollNo = rollNo;
	}

	public Address getAddress() {
		return address;
	}

	@Required
	@Autowired
	public void setAddress(Address address) {
		this.address = address;
	
	/*
	 * important to make autowired here, so that autowired object used here to in setting the address also.
	 * otherwise its always expecting an address object to be injected. We are just passing the autowired object
	 * here to resolve the issue.
	 */
	}

}
