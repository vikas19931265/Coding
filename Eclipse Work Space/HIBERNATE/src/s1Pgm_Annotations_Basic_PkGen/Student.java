package s1Pgm_Annotations_Basic_PkGen;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity  //  annotation marks this class as an entity.
@Table(name="TB_STUDENT") // specifies table to which the entity fields are to be mapped.
public class Student {

	@Id
	/*@GeneratedValue(strategy = GenerationType.AUTO) 
		
		 this is default strategy in which automatically id will be generated , based on previous
		 highest value of the id. This is similar to increment in xml approach.
		 
		 Similary we have identity also but that is used in mysql database and not suitable for
		 batch updates.
		 
		 If we use only @Id , then hibernate is going to treat the column as primary key but it will not
		 autogenerate the primary keys for us. This will be like Assigned in xml approach where we explicitly
		 need to assign the primary key by our code. The first primary key value will be inserted by hibernate
		 based on data type of column if int then 0 will be inserted. 
		 
		 But if we run it again then we will get unique violation constraint since hibernate will again try
		 to insert the same value which is not allowed.
		
	*/
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CUST_SEQ")
    @SequenceGenerator(sequenceName = "customer_seq", allocationSize = 1, name = "CUST_SEQ")
	/*
	 * Here in this case i have create a sequence in the databsae.
	 * CREATE SEQUENCE customer_seq
					  MINVALUE 1
					  MAXVALUE 9999999999
					  START WITH 40
					  INCREMENT BY 80;
  
  Note very important that you commit the seqeunce after creating to prevent abnormal result.
  
	 * 
	 */
						
						
	@Column(name="STUDID", length = 20)
	private int studentId;
	
	@Column(name="Name")
	private String name;
	@Column(name="Address")
	private String address;

	public int getId() {
		return studentId;
	}

	public void setId(int studentId) {
		this.studentId = studentId;
	}

	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
