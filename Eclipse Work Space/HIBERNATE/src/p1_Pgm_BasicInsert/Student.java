package p1_Pgm_BasicInsert;

import java.io.Serializable;

 public class Student implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -774495228209857413L;
	//POJO properties
	//identity property
	private int sno;  
	//common properties
	private String sname; 
	private String semail;
	private String smobile;

	private int version;
	
	public Student() {
		System.out.println("Default Constructor.");
	}
	
	public void setVersion(int version) {
		this.version = version;
	}
	
	public int getVersion() {
		return version;
	}
	
	//One pair of setXXX()and getXXX()methods for each property
	public int getSno() {
		return sno;
	}

	public void setSno(int sno) {
		this.sno = sno;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public String getSemail() {
		return semail;
	}

	public void setSemail(String semail) {
		this.semail = semail;
	}

	public String getSmobile() {
		return smobile;
	}

	public void setSmobile(String smobile) {
		this.smobile = smobile;
	}

}