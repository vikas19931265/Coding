package s5_Pgm_Annotation_Association_1to1;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name="TB_PAN")
public class PAN {

	@Id @GeneratedValue(generator = "newgenerator")
	@GenericGenerator(name="newgenerator", strategy="foreign", parameters = {@Parameter(value = "employee" , name = "property")})
	private int id;
	private String PanNumber;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="id")
	private Employee employee;

	/*
	 * Whenever a pan and employee object are created and employee reference is set in the pan object. Then
	 * this reference here will basically create a column in the pan table which will bring relationship between
	 * the two tables.
	 * 
	 * Now since for one to one, we can use primary key as the joining column to avoid unnecessary addition
	 * of a new column.
	 * 
	 * 
	 * 
	 */
	
	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}


	public String getPanNumber() {
		return PanNumber;
	}

	public void setPanNumber(String panNumber) {
		PanNumber = panNumber;
	}
}
