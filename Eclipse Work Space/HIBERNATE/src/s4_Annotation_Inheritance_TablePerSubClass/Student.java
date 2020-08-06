package s4_Annotation_Inheritance_TablePerSubClass;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Table(name="TB_STUDENT")
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
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