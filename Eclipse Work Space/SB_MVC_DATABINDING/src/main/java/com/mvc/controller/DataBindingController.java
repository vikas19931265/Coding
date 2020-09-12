package com.mvc.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.mvc.dto.AddressDTO;
import com.mvc.dto.Phone;
import com.mvc.dto.StudentDTO;

@Controller
public class DataBindingController {

	@GetMapping("/")
	public String displayHomePage(@ModelAttribute("studentInfo") StudentDTO student) {
		student.setEmail("gautamv725@gmail.com");
		student.setName("Vikas Gautam");
		Phone phone= new Phone();
		phone.setCode("91");
		phone.setNumber("7092198142");
		student.setPhoneNumber(phone);
		AddressDTO address = new AddressDTO();
		address.setAddressLine1("Kabilar street");
		address.setAddressLine2("Palvanthangal");
		address.setAddressLine3("Chennai");
		address.setCity("Chennai");
		address.setPincode("600114");
		address.setState("Tamil nadu");
		student.setAddress(address);
		student.setGender("male");
		
		
		
		return "addemployee";
	}

	
	@PostMapping("/addemployee")
	public String displayStudentDetails(@Valid @ModelAttribute("studentInfo") StudentDTO student, BindingResult br)
	{
		
		if(br.hasErrors())
		{
			System.out.println(br);
			//Field error in object 'studentInfo' on field 'courses': rejected value [CoreJava,Spring]; codes [typeMismatch.studentInfo.courses,typeMismatch.courses,typeMismatch.java.util.List,typeMismatch]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [studentInfo.courses,courses]; arguments []; default message [courses]]; default message [Failed to convert property value of type 'java.lang.String[]' to required type 'java.util.List' for property 'courses'; nested exception is java.lang.IllegalStateException: Cannot convert value of type 'java.lang.String' to required type 'com.mvc.dto.CoursesDTO' for property 'courses[0]': no matching editors or conversion strategy found]
			return null;
		}
		System.out.println("student data binding object test");
		System.out.println(student.getName());
		System.out.println(student.getEmail());
		System.out.println(student.getGender());
		System.out.println(student.getAddress().getAddressLine1()); 
		System.out.println(student.getAddress().getAddressLine2());
		System.out.println(student.getAddress().getAddressLine3());
		System.out.println(student.getAddress().getState());
		System.out.println(student.getAddress().getCity());
		System.out.println(student.getAddress().getPincode());
		System.out.println(student.getPhoneNumber().getCode() + " " + student.getPhoneNumber().getNumber());
		System.out.println("Age of the student is  " + student.getAge());
		return null;
	}
	
}
