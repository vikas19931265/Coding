package com.studentcrud.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class StudentLogin {
	
	@NotBlank(message = "please enter username")
	@Size(min = 5 , max= 10, message = "length should be between 5 to 10 characters")
	private String username;
	
	
	@NotBlank(message = "please enter the password")
	private String password;
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	


}
