package com.pgm.a5constructorInjection.CollectionSetter;

import java.util.*;

public class Student {

	private int id;
	private String name;
	private List<String> courses;
	private Set<Long> mobileNos;
	private Map<String, String> feeDetails;
	private Properties prop;
	private String emptyString;
	private String nullValue;

	public Student(int id, String name, List<String> courses, Set<Long> mobileNos, Map<String, String> feeDetails,
			Properties prop, String emptyString, String nullValue) {
		super();
		this.id = id;
		this.name = name;
		this.courses = courses;
		this.mobileNos = mobileNos;
		this.feeDetails = feeDetails;
		this.prop = prop;
		this.emptyString = emptyString;
		this.nullValue = nullValue;
	}

	

	public Student(int id, String name, List<String> courses, Set<Long> mobileNos, Map<String, String> feeDetails,
			Properties prop, String emptyString) {
		super();
		this.id = id;
		this.name = name;
		this.courses = courses;
		this.mobileNos = mobileNos;
		this.feeDetails = feeDetails;
		this.prop = prop;
		this.emptyString = emptyString;
	}

	public String getEmptyString() {
		return emptyString;
	}

	public void setEmptyString(String emptyString) {
		this.emptyString = emptyString;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public List<String> getCourses() {
		return courses;
	}

	public Set<Long> getMobileNos() {
		return mobileNos;
	}

	public Map<String, String> getFeeDetails() {
		return feeDetails;
	}

	public Properties getProp() {
		return prop;
	}
	public String getNullValue() {
		return nullValue;
	}

}
