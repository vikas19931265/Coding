package a2_ScopeAnnotation;

/*
 * We have two kinds of scope as we know at core level , one is prototype scope and the other one is
 * singleton scope
 * 
 * by default the scope of the bean is singleton only , meaning that only one object of the bean will
 * be getting created and the same will be returned whenever we are calling get bean.
 * 
 * However in prototype everytime we call the getBean() a new object of that type will be returned to us.
 * 
 * 
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Client {

	public static void main(String[] args) {
		ApplicationContext context=SpringApplication.run(Client.class, args);
		Student student=context.getBean(Student.class);
		System.out.println(student.hashCode()); //1312963234
		Student student2=context.getBean(Student.class);
		System.out.println(student2.hashCode());//2143139988
		
		/*
		 * Notice here how we are getting different objects whenever we are trying to get the bean object.
		 * 
		 * Note: if main object scope is singleton and containing object is prototype then the complete object
		 * is singleton by default
		 */
	
	}

}



