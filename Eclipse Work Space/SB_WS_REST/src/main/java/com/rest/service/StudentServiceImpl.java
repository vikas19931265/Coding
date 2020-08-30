package com.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Service;

import com.rest.dao.StudentDAO;
import com.rest.entity.Student;

@Service
public class StudentServiceImpl  implements StudentService {

	@Autowired
	StudentDAO studentDAO;
	
	@Override
	public List<Student> getStudents() {


		Student student1=studentDAO.displayStudents().get(0);
		System.out.println(student1.getName());
		System.out.println(student1.getAddress().get(0).getAddressLine1());
		
		return studentDAO.displayStudents();
	}
	
	@Override
	public Student getStudent(int studentId) {
		 return studentDAO.getStudent(studentId);
	}

}
