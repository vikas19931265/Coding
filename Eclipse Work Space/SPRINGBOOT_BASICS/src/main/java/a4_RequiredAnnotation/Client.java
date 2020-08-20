package a4_RequiredAnnotation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Client {

	public static void main(String[] args) {
		ApplicationContext context=SpringApplication.run(Client.class, args);
		Student student=context.getBean(Student.class);
		/*
		 * Notice here, we are trying to get the object of student type. But the address is set
		 * as required. Therefore if address is not autowired to student then the student object also
		 * should not get created.
		 * 
		 * org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'student' defined in file
		[C:\Users\Vikas.Gautam\Desktop\GitV2\SPRINGBOOT_STSWORSKSPACE\SB_BASICS\target\classes
			\a4_RequiredAnnotation\Student.class]: Initialization of bean failed;
			
			 nested exception is org.springframework.beans.factory.BeanInitializationException: 
			 Property 'address' is required for bean 'student'
		 * 
		 * So autowiring becomes compulsary here. 
		 * 
		 * Note: Since in the setter method we have put required, therefore its always expecting a value to 
		 * be passed there. If we dont want to pass the value then we can set it as autowire. Therefore whichever
		 * object was autowired will also be used as setter otherwise we will keep gettin the exception.
		 * 
		 */
		System.out.println(student.getAddress().getState()); //uttar pradesh
	
	}
}
		
	

