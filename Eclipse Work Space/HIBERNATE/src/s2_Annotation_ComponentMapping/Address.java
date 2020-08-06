package s2_Annotation_ComponentMapping;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;

@Embeddable

/*
 * i did not place @Entity here , because this table does not need its own id
 * it is going to use the id of the student table since both are them are strongly
 * coupled together by the component mapping.
 * 
 * Here address class cannot have an id of its own hence not mentioned as entity.
 * 
 * 
 */
public class Address {

	@Column(name="Street")
	private String street;
	
	@Column(name="City")
	private String city;
	
	@Column(name="State")
	private String state;
	
	@Column(name="ZipCode")
	private String zipCode;
	
	private static final long serialVersionUID = -874495228209857413L;

	public Address() {
		super();
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	
	
}
