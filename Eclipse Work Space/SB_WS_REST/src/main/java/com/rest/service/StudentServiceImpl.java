package com.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rest.dao.StudentDAO;
import com.rest.entity.Student;

@Service
public class StudentServiceImpl  implements StudentService {

	@Autowired
	StudentDAO studentDAO;
	
	@Override
	@Transactional
	public List<Student> getStudents() {
		return studentDAO.displayStudents();
	}
	
	@Override
	@Transactional
	public Student getStudent(int studentId) {
		 return studentDAO.getStudent(studentId);
	}

	@Override
	@Transactional
	public void createStudent(Student student) {
		
		studentDAO.createStudent(student);
	
	}


}
