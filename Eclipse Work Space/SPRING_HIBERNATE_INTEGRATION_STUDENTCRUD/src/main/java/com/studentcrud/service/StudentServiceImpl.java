package com.studentcrud.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studentcrud.dao.StudentDAO;
import com.studentcrud.entity.*;

@Service
public class StudentServiceImpl  implements StudentService{

	
	@Autowired
	StudentDAO studentDAO;
	
	@Override
	public void addStudent(Student student) {

		studentDAO.addStudent(student);
	}

	@Override
	public void deleteStudent(Student student) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Student searchStudent(int studentId) {
		
		return studentDAO.searchStudent(studentId);
	}

	@Override
	public void updateStudent(Student student) {
		// TODO Auto-generated method stub
		
	}

	
	
}
