package a7_ConfigurationAndBean;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {

	@Bean(name="StudentBean") // Student bean is acting as the id of the bean otherwise by default will take method name
	
	/*
	 * Please note that here that writing a method with annotation will register that 
	 * method with application context making it eligible to return any bean object
	 * in future.
	 * 
	 * 
	 */
	
	public Student generateStudentObject()
	{
		Student student = new Student();
		student.setAddress(generateAddressObject()); 
		
		/*
		 * Student has a dependency and we are injecting it manually
		 * 
		 */
		return student;
	}
	
	@Bean(name="AddressBean")
	public Address generateAddressObject()
	{
		Address address= new Address();
		return address;
	}


}
