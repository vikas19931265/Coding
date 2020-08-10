package t1_Pgm_Annotation_Association_1toM_B;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name="TB_EMPLOYER")
public class Employer {
	private Long id;
	private String employerName;
	private Set<Employee> employees;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmployerName() {
		return employerName;
	}

	public void setEmployerName(String employerName) {
		this.employerName = employerName;
	}

	@OneToMany(cascade = CascadeType.ALL , mappedBy = "employer" )
	
	/*
	 * In one to many relationship if it is unidirectional , then a third table will
	 * be maintained keeping the relationship, however if its bidirectional then
	 * additional column is there in the child table.
	 * 
	 * So now in this case we have two relationship, one in the column and one in the table.
	 * So the column relationship is coming from the parent class. And we want to keep only
	 * that relationship hence we are going for mappedBy="employer"
	 * 
	 * So basically when we have two relationships, we can eliminate one by using the mapped by.
	 * 
	 * 
	 * 
	 * 
	 */
	public Set<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(Set<Employee> employees) {
		this.employees = employees;
	}
}
