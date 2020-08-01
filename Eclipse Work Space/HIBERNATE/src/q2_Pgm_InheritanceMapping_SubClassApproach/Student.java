package q2_Pgm_InheritanceMapping_SubClassApproach;

import java.io.Serializable;

 public class Student implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -774495228209857413L;
	
	private long id;
	private String name;
	private Address address;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	
	
	
 
 }