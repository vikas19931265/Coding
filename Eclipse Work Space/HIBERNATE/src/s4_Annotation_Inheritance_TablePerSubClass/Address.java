package s4_Annotation_Inheritance_TablePerSubClass;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
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
