package p2_Pgm_BasicUpdates;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;

//Insert Student object as student record in DB.
public class StudentClient {

	public static void main(String[] args) {
		
		Configuration config= new Configuration();
		config.configure("p2_Pgm_BasicUpdates/hibernate.cfg.xml");
		SessionFactory session= config.buildSessionFactory();
		Session openSession = session.openSession();
		Transaction transaction=openSession.beginTransaction();
		
		Student student= (Student)openSession.get(Student.class,2);
		System.out.println("email id of student is "+ student.getSemail());
		student.setSname("sarwan123");
		
		transaction.commit();
		openSession.close();
		
		/*
		 * Here in this case when we load the object, it is present in the session cache. Since we are making
		 * changes to object present in thes session cache. Once the flush method is called the updates will
		 * reflect inside the database.
		 * 
		 * Here in this case since the object is loaded from the database using the get(). The object is already
		 * present inside the session cache.
		 * 
		 * If we call (session.evit(object)) then we are moving the object from the session cache to detached state.In
		 * that case if we want to perform any updation on the object then it becomes mandatory to call the udpate 
		 * method.
		 * 
		 * 
		 */
		
		
		
		
	}
}
