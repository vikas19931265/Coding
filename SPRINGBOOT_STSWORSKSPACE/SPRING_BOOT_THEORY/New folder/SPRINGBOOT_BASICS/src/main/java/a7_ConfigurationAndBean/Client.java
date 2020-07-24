/*
 * Here in this program i m trying to show alternative for @Component. Spring will 
 * create bean for all the classes specified with this annotation. But sometimes
 * we dont want to have spring taking full control of this.
 * 
 * Instead we want to define how many and what beans will be created.
 * 
 * Using this approach we can get better control of the objects creation.
 * 
 */

package a7_ConfigurationAndBean;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class Client {

	public static void main(String[] args) {
		ApplicationContext context= new AnnotationConfigApplicationContext(StudentConfig.class);
		Student student=context.getBean("StudentBean",Student.class);
		System.out.println("state is "+ student.getAddress().getState()); //state is uttar pradesh
	 
	}
}

/*
 
 */
		
	

