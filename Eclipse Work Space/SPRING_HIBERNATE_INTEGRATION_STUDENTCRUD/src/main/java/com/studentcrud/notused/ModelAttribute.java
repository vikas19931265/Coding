/*
package com.studentcrud.notused;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.studentcrud.model.Courses;
import com.studentcrud.model.Student;


// This is a Controller class which is going to interact with the service class

 class StudentController1 {

	
	 * @Autowired StudentService students;
	 
	@RequestMapping(value = "/")
	public String homePage() {
		return "home";
	}

	@GetMapping("/addemployee")  // can be triggered by hyperlink as well (a get reqeust)
	public String showForm(@ModelAttribute("studentInfo") Student student) {
		student.setName("Vikas Gautam");
		return "addemployee";
	}
	
	
	@PostMapping("/addemployee") // triggered from a post form.
	// or @RequestMapping(value = "/addemployee", method = RequestMethod.POST)
	
	public String addEmployee(@ModelAttribute("studentInfo") Student student ) {
		
		
		 * So , here what ever information is entered by the user is coming in the form of Model object
		 * So here @ModelAttribute annotation is automatically binding all the values present in the
		 * model object with the student object.
		 * 
		 * It will also set the student object value inside the model object like model.setAttribute(studentInfo, student)
		 * So using the studentInfo alias name for the model object we can acces it in the jsp page.
		 * 
		 * 
		 * 
		 
		
		//students.addStudent(student);
		System.out.println(student.getName());
		System.out.println(student.getGender());
		System.out.println(student.getEmail());
		System.out.println(student.getAddress());
		System.out.println(student.getCourse());
		return "confirmation";
	}

	

} 
*/