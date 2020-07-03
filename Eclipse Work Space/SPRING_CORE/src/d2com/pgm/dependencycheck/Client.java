package d2com.pgm.dependencycheck;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("d2com/pgm/dependencycheck/Student.xml");
		Student student=context.getBean(Student.class, "studentBean");
		
		/*
		 * Notes
		 * ======
		 * 
		 * If we dont do the dependency check then spring will not check if the dependent object is injected or not.
		 * It will simply create the dependent object with null value. 
		 * 
		 * Therefore we can use the dependency check which will not allow the creation of parent object itself if 
		 * the dependent object is not injected.
		 * 
		 * But this is out dated now and instead of this we have @Required annotation.
		 * 
		 */


		
		
	}
	
}
