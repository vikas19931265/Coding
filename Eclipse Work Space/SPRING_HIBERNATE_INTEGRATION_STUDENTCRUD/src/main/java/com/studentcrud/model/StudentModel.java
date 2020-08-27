package com.studentcrud.model;

import java.util.ArrayList;
import java.util.List;

public class StudentModel {

	private String name;
	private String gender;
	private String phonenumber;
	private String email;
	private String address;
	private List<CoursesModel> course;


	public List<CoursesModel> getCourse() {
		return course;
	}

	public void setCourse(List<CoursesModel> course) {
		this.course = course;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
