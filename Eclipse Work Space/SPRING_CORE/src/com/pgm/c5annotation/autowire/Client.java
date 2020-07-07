package com.pgm.c5annotation.autowire;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/c5annotation/autowire/Student.xml");
		Student student = context.getBean("studentBean", Student.class);
		System.out.println(student.getSecondaryAddress().getAddress());  //kabilar street secondary address
		
		/*
		 * We have successfully autowired secondary address property inside the bean.
		 */
		

	}
}

/*
In this example we are autowiring address object into the student object. But since there are two address beans
available to us hence we have to use @Qualifier annotation to tell the spring which bean object should be used
for injection.


*/