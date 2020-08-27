package com.studentcrud.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="TB_STUDENT1")
public class Student {

	@Id
	@GeneratedValue
	private int studentId;
	private String name;
	private String gender;
	private String phonenumber;
	private String email;
	private String address;
	
	
	@ManyToMany(cascade = CascadeType.ALL , fetch = FetchType.EAGER)
	
	/*
	 * Fetch type is eager so that when we are fetching the details of student object
	 * all the reference object details will also be loaded otherwise by default it will
	 * be a lazy load, that is on demand only in this case course object details will be loaded
	 * 
	 * 
	 */
	private List<Course> courses;

	
	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	
	public List<Course> getCourses() {
		return courses;
	}

	public void setCourses(List<Course> courses) {
		this.courses = courses;
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
