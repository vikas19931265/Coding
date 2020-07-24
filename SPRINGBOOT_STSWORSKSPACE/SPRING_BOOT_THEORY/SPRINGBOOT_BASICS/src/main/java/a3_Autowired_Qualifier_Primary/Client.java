package a3_Autowired_Qualifier_Primary;

/*
 * Autowired ( happens by type)
 * ========================
 * In this program, a student have a vehicle, but we have made vehicle class as interface.
 * Now its ambigious to spring that by autowire which class object should be mapped to student.
 * 
 * And this is where qualifier is going to come into picture.
 * 
 * We can mark our class by qualifier name and use the same qualifier name in our main class to decide
 * which object is to be mapped.
 * 
 * Primary
 * =================
 * 
 * We can also mark a class as with primary annotation. In that case whenever there is ambiguity as to
 * which object should be injected then the primary object will always get inserted. But here we should be sure
 * about the situation that we want to insert that object only.
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
		student.getVehicle().behaviour(); //I am riding Car
			
		/*
		 * If we had not used a qualifier here then spring will get confused which object should be injected 
		 * and we will get below exception.
		 * 
		 * Field vehicle in a3_AutowiredAndQualifier.Student required a single bean, but 2 were found:
	- bike: defined in file [C:\Users\Vikas.Gautam\Desktop\GitV2\SPRINGBOOT_STSWORSKSPACE\
				SB_BASICS\target\classes\a3_AutowiredAndQualifier\Bike.class]
	- car: defined in file [C:\Users\Vikas.Gautam\Desktop\GitV2\SPRINGBOOT_STSWORSKSPACE\SB_BASICS\target\
				classes\a3_AutowiredAndQualifier\Car.class]
		 * 
		 * 
		 */
	
		
	}

}



