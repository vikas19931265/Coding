package p4_pgm_Selectop_get_load;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;

public class StudentClientGet {

	public static void main(String[] args) {
		
		Configuration config= new Configuration();
		config.configure("p4_pgm_Selectop_get/hibernate.cfg.xml");
		SessionFactory session= config.buildSessionFactory();
		Session openSession = session.openSession();
		Transaction transaction=openSession.beginTransaction();
		
		Student student= (Student)openSession.get(Student.class,2); // trying to get student with id 2, not present.
		
		/*
		 * get
		 * ===========
		 * 
		 * Here the object is given instantly. If the object is not present then we will not get any exception but
		 * will simply return null value
		 * 
		 * 
		 */
		System.out.println("student object is " + student); //student object is null

	
	}
}
