package p3_Pgm_DeleteRecord;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;

//Insert Student object as student record in DB.
public class StudentClient {

	public static void main(String[] args) {
		
		Configuration config= new Configuration();
		config.configure("p3_Pgm_DeleteRecord/hibernate.cfg.xml");
		SessionFactory session= config.buildSessionFactory();
		Session openSession = session.openSession();
		Transaction transaction=openSession.beginTransaction();
		
		Student student= (Student)openSession.get(Student.class,2);
		System.out.println("Student object is " + student);
		
		//Deleting the record from the database. ( approach 2)
		if(student!=null)
			openSession.delete(student);// moving object from persistant state to transient state
		
		
		
		// Approach 1:
		
		/*
		 * In this approach we create a new transient object and then set the id in it and then call the delete
		 * 
		 */
		Student student2 = new Student();
		student2.setSno(4);
		
		openSession.delete(student2);
		transaction.commit();
	
	}
}
