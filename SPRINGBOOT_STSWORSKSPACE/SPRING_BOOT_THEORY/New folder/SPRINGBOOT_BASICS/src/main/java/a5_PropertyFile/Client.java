package a5_PropertyFile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Client {

	public static void main(String[] args) {
		ApplicationContext context=SpringApplication.run(Client.class, args);
		StudentDAO student=context.getBean(StudentDAO.class);
		System.out.println(student.getUrl());
		System.out.println(student.getUsername());
		System.out.println(student.getPassword());
	
		/*
		 * jdbc:thin:orace:Driver
		   vikas
		   manager
		 */
		
	}
}
		
	

