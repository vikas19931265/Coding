package s7_Pgm_Annotation_Association_1to1_BIDIRECTION;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name="TB_ADDRESS")
class Address
{
	@Id
	@Column(name="ADDRESSID")
	@GeneratedValue(generator = "newgenerator")
	@GenericGenerator(name="newgenerator", strategy = "foreign" , parameters = {@Parameter(value="student" ,name="property")})
	
	/*
	 * What generator does
	 * 
	 * is we use this approach of addressid generator, then whenever an adddress object is created, its
	 * id will be not be assigned at the run time. Instead it will get the id from the parent table
	 * that is student table primary key.
	 * 
	 * So we can understand it like this in BIRECTIONAL MAPPING SCENARIO
	 * 
	 * if student object is created, we can assign address to it. So student object will be created wit
	 * auto generated primary key and the same primary key will get assigned to address table.
	 * 
	 * if address object is created, its primary is not assigned. When its made as part of student object
	 * then whatever id student object is holding the same id will be given to the address.
	 * 
	 * 
	 * 
	 * 
	 */
	
	private int addressId;
	private String street;
	private String city;
	private String zipCode;
	private String state;
	@OneToOne(cascade = CascadeType.ALL  , mappedBy = "address" ) // BI DIRECTIONAL MAPPING ONE to ONE
	
	/*
	 * If we dont use mapped by = addresss, then hiberate will create another column that
	 * will be foreign key holding the primary key reference of the parent table that is student
	 * table which is useless. Because already one side of mapping from student class is present
	 * 
	 * So in order to specify that which side of mapping should be considered we use this property.
	 * if we specify mapped=address here then address table mapping will be ignored and address property
	 * which is belonging to the student class will be considered for the mapping.
	 * 
	 * In this way we are eliminating another column.
	 * 
	 * 
	 * 
	 */
	private Student student;
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
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getAddressId() {
		return addressId;
	}
	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	
	
}