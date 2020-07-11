package a1_DI_CreatingBeans;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Client {

	public static void main(String[] args) {
		ApplicationContext context=SpringApplication.run(Client.class, args);
		Student student=context.getBean(Student.class);
		System.out.println(student.getAdddress().getState());
	
	}

}
