package com.pgm.b3lazyinit;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {

	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/pgm/b3lazyinit/Student.xml");
		Student student=context.getBean(Student.class, "studentBean");
		System.out.println(student.getAddress().hashCode()); //280884709
		/*
		 * so we have an address..lets try to get address object from bean and see if we have same address
		 */
		
		Address adr=context.getBean("address",Address.class);
		System.out.println(adr.hashCode());//280884709
		
		/*
		 * so note that both objects are same...
		 * 
		 * Now, we had another addressbean for which we did lazy init, lets see that object is created or not
		 * with the required fields. If we see the constructor call here we see address constructor is called only
		 * once therefore object was not created for secondary address.
		 * 
		 * Address constructor is called
		 * 
		 * But to note , in our case we had done autowire by name and the bean id was not matching the configured
		 * property, if it would have matched then object would have got created by dependency injection and lazy 
		 * init concept would not occur.
		 * 
		 * lazy init concept applicable for beans not injected during xml load.
		 * 
		 */
		
		Address adr2=context.getBean("secondAdr",Address.class);
		System.out.println(adr2.hashCode());//280884709
		
		/*
		 * see the object is created but only after we are asking for bean. 
		 * 
		 */
		
		
		

		
		
	}
	
}
