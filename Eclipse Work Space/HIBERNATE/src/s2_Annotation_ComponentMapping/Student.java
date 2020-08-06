package s2_Annotation_ComponentMapping;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="TB_STUDENT")
@Entity
public class Student implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -774495228209857413L;
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column(name="Name")
	private String name;
	
	@Embedded
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