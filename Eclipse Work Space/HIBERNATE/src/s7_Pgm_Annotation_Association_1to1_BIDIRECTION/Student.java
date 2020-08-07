package s7_Pgm_Annotation_Association_1to1_BIDIRECTION;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

/*
 * 1 to 1 mapping example, 1 student can have only one address. This is unidrectional so from student
 * we can traverse to the address. But using the address we cannot traverse to student.
 * 
 * 
 */

@Entity
@Table(name="TB_STUDENT")
class Student
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int studentId;
	
	private String studentName;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="studentId")
	
	/*
	 * steps of action
	 * 
	 * 1. Here student table acting as parent table contains a child reference that is address. Therefore
	 * whenever we are trying to insert an object first address object is created with an id generated at the
	 * run time.
	 * 
	 * 2. After the creation of the adddres object , student object is created containing a foreign key column.
	 * This foreign key column will have a default name. To specify the exact name we have to give @JoinColumn(name="AddressId")
	 * 
	 * 3. Now the student object created will have the foreign key taken from the address object generated id.
	 * 
	 * In this way the one to one mapping in 1 direction is acheived. But to note in this case there will be a 
	 * foreign key column which will be needed. We can further eliminate this column completely.
	 * 
	 * We can eliminate this column in below manner
	 * 
	 * 1. Dont allow the address to create its own id at run time. Instead we will use a generic generator which
	 * will generate the id based upon the student primary key value.
	 * 
	 * Here the joining of the student with address table will be based upon the primary key column that
	 * is the student Id
	 * 
	 * 
	 */
	private Address address;
	
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	
	
	
}