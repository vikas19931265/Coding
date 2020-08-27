package com.studentcrud.service;

import com.studentcrud.entity.*;;

public interface StudentService {

	public void addStudent(Student student);
	public void deleteStudent(Student student);
	public Student searchStudent(int studentId);
	public void updateStudent(Student student);

}
