package com.rest.service;

import java.util.List;

import com.rest.entity.Student;

public interface StudentService {

	public List<Student> getStudents();
	public Student getStudent(int studentId);
	
	
}
