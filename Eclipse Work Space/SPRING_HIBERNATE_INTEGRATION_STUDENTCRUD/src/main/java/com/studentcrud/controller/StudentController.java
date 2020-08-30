package com.studentcrud.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.studentcrud.dto.StudentDTO;
import com.studentcrud.entity.*;
import com.studentcrud.model.StudentLogin;
import com.studentcrud.service.StudentService;


// This is a Controller class which is going to interact with the service class

/*
 * Here SB or dispather servlet gets access to the StudentController bean. Please note its 
 * not the normal object but not a bean. So its not like Student student= new Student. 
 * 
 * 
 */

@Controller
public class StudentController {

	
	  @Autowired StudentService studentsService;
		
	  	
		@PostMapping("/home")
		public String homePage(@Valid @ModelAttribute("studentLogin")  StudentLogin studentLogin ,BindingResult br) 
		{
			System.out.println("username is"+ studentLogin.getUsername()); 
			System.out.println("password is " + studentLogin.getPassword());
			if (br.hasErrors()) {
					System.out.println("Haiving error");
				  return "login";
				} else {
						if(studentLogin.getUsername().equals("admin") && studentLogin.getPassword().equals("password"))
						{
							return "home";
						}
						else
						{
							
							return "login";
						}
					
				}
		}
	  
	  
	  @GetMapping("/") // request is coming to load login page
		public String studentLogin(@ModelAttribute("studentLogin") StudentLogin studentLogin) {
		  
		  	return "login";
		  }

		
	@GetMapping("/addemployee")  // can be triggered by hyperlink as well (a get reqeust)
	public String showForm(@ModelAttribute("studentInfo") Student student) {
		student.setName("Vikas Gautam");
		
		/*
		 * ****IMPORTANT
		 * 
		 * When trying to do the databinding for a particular page, the control must first come to 
		 * the controller, which will set the model object. And then only its should go to the page.
		 * 
		 * If it happens other way round that is control comes first to page and we are trying to acccess
		 * the model object value then the databinding will not happen and we will be facing an exception.
		 * 
		 */
		
		
		
		return "addemployee";
	}
	
	
	@PostMapping("/addemployee") // triggered from a post form.
	// or @RequestMapping(value = "/addemployee", method = RequestMethod.POST)
	
	public String addEmployee(@RequestParam String name, @RequestParam String email, @RequestParam("gender") String gender,  @RequestParam String address, @RequestParam String phonenumber, @RequestParam(name="courses") String[] courses,  Model student ) {
		
		/*
		 * I used this approach instead of shortcut @ModelAttribute so that i can treat courses as object of Course type and not string.
		 * If we are using checkbox the elements will get binded as String but i want to hold them as course object so i have done
		 * this.
		 * 
		 * 
		 */
		
		Student students = new Student();
		students.setName(name);
		students.setAddress(address);
		students.setEmail(email);
		students.setGender(gender);
		students.setPhonenumber(phonenumber);
		List<Course> studentsCourses = new ArrayList();
		for(String course : courses)
		{
			Course studentCourse = new Course();
			studentCourse.setCourseName(course);
			studentsCourses.add(studentCourse);		
		}
		students.setCourses(studentsCourses);
		student.addAttribute("studentInfo", students);
		studentsService.addStudent(students);
		return "confirmation";
		
		
	}
	
	@GetMapping("/searchStudent")
	public String searchStudents()
	{
		return "searchStudents";
	}
	
	@GetMapping("/studentSearch")
	public String searchStudent(@RequestParam int studentNumber , Model model)
	{
		Student student= studentsService.searchStudent(studentNumber);
		model.addAttribute("studentDetails", student);
		return "studentDetails";
		
	}


}
