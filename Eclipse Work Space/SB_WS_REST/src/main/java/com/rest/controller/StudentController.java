package com.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rest.entity.Student;
import com.rest.service.StudentService;

@Controller
public class StudentController {


	@Autowired
	StudentService studentService;;
	
	@GetMapping("/students")
	@ResponseBody
	public List<Student> getStudents()
	{
		return studentService.getStudents();
	}


	
	@GetMapping("/student/{studentId}")  // studentID value from url is inserted in below studentId function.
	public Student getStudent(@PathVariable int studentId)
	{
			return studentService.getStudent(studentId);
	}
	
	
}
