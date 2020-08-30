package com.rest.dao;

import java.util.List;

import com.rest.entity.Student;

public interface StudentDAO {

	
	public List<Student> displayStudents();
	
	public Student getStudent(int studentId);

}
