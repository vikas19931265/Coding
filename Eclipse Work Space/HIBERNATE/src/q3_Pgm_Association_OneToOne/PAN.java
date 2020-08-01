package q3_Pgm_Association_OneToOne;

public class PAN {

	private int id;
	private String PanNumber;
	private Employee employee;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public String getPanNumber() {
		return PanNumber;
	}

	public void setPanNumber(String panNumber) {
		PanNumber = panNumber;
	}
}
