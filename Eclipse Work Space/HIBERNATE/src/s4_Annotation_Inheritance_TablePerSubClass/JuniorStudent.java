package s4_Annotation_Inheritance_TablePerSubClass;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn
public class JuniorStudent extends Student{

	/*
	 * Since this class is inherited from the student class, and student class already
	 * have a primary key id, therefore we have not mentioned here.
	 * 
	 * Here basically all child classes are entities only but all of the data is maintanined only
	 * in one table.
	 * 
	 * 
	 * 
	 */
	
	private String grade;

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}
	
	
	
}
