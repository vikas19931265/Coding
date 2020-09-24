package com.rest.controller;

import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.rest.entity.Student;
import com.rest.service.StudentService;

@RestController
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
	@ResponseBody
	public Student getStudent(@PathVariable int studentId)
	{
		/*
		 	@PathVariable is used to extract the information from the URI.
		 	If we want to display a specific user detail on the browser, add the mapping "/user/{id}
		 */
		
		
		return studentService.getStudent(studentId);
			
	}
	
    @PostMapping("/student/student")
	public void createStudent(@RequestBody Student student)
    {
    	studentService.createStudent(student);
    		
    }
	
	
}

