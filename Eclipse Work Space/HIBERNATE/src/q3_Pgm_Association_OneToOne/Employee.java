package q3_Pgm_Association_OneToOne;

public class Employee {

	private String name;
	private int employeeId;
	private PAN PanNumber;

	

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public PAN getPanNumber() {
		return PanNumber;
	}

	public void setPanNumber(PAN panNumber) {
		PanNumber = panNumber;
	}
	
	
}
