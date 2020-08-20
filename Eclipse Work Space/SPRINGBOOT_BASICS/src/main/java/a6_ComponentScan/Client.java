package a6_ComponentScan;

import org.springframework.boot.SpringApplication;
import a4_RequiredAnnotation.Student;
/*
 * we are going to use student class in another package.
 */
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "a4_RequiredAnnotation") // package component scan.
public class Client {

	public static void main(String[] args) {
		ApplicationContext context=SpringApplication.run(Client.class, args);
		Student student=context.getBean(Student.class);
		System.out.println(student.getAddress().getState()); //uttar pradesh
	
	}
}

/*
 * Here we are trying to create bean object of a student class which is lying in some other package
 * not having any relationship with our current package.
 * 
 * If we try to create a bean in this case then.
 * 
 * Exception in thread "main" org.springframework.beans.factory.
 * NoSuchBeanDefinitionException: No qualifying bean of type 'a4_RequiredAnnotation.Student'
 * available
 * 
 * In order to fix this we have to do the component scan of the package here.
 * 
 * Doing this will fix our issue.

 * 
 * 
 */
		
	

