package d1com.pgm.inheritance;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CarClient {
	
	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("d1com/pgm/inheritance/inheritance.xml");
		
		Car parentCar = context.getBean("parentCar", Car.class);
		/*
		 * We cannot create a bean of parent car here because parentCar is declared as abstract.
		 * 
		 */
		
		parentCar.showCarDetails();
	}
}
