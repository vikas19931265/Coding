package com.studentcrud.controller;

import com.studentcrud.model.*;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class StudentController {

	@RequestMapping(value = "/")
	public String homePage() {
		return "home";
	}

	@GetMapping("/addemployee")
	public String showForm(@ModelAttribute("studentInfo") Student student) {
		student.setName("Vikas Gautam");
		return "addemployee";
	}
	
	
	@PostMapping("/addemployee")
	// or @RequestMapping(value = "/addemployee", method = RequestMethod.POST)
	
	public String addEmployee(@ModelAttribute("studentInfo") Student student) {
		System.out.println(student.getName());
		System.out.println(student.getGender());
		System.out.println(student.getEmail());
		System.out.println(student.getAddress());
		System.out.println(student.getCourse());
		return "confirmation";
	}

	

}
