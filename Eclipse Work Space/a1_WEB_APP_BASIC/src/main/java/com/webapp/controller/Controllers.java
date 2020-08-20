package com.webapp.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller  // this will receive the request from the request dispatcher
public class Controllers {

	
	@RequestMapping(value = "/hello")  // by default a GET 
	public String getMessage() {
		return "Login";
	}
	 
	
	
	@RequestMapping(value = "/hellopost" , method = RequestMethod.POST)
	public String loginMessage(@RequestParam String username, @RequestParam String password) {
		System.out.println("user name is " + username);
		System.out.println("password is " + password);
		return "Welcome";
	}
	 

}
