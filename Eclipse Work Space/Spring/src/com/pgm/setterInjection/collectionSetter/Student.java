package com.pgm.setterInjection.collectionSetter;
import java.util.*;

public class Student {

	private int id;
	private String name;
	private List<String> courses;
	private Set<Long> mobileNos;
	private Map<String,String> feeDetails;
	private Properties  prop;
	
	public Student() {

	
	}

	public Properties getProp() {
		return prop;
	}

	public void setProp(Properties prop) {
		this.prop = prop;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getCourses() {
		return courses;
	}

	public void setCourses(List<String> courses) {
		this.courses = courses;
	}

	public Set<Long> getMobileNos() {
		return mobileNos;
	}

	public void setMobileNos(Set<Long> mobileNos) {
		this.mobileNos = mobileNos;
	}

	public Map<String, String> getFeeDetails() {
		return feeDetails;
	}

	public void setFeeDetails(Map<String, String> feeDetails) {
		this.feeDetails = feeDetails;
	}
	



}
