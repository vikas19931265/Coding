package p4_pgm_Selectop_get_load;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;

//Insert Student object as student record in DB.
public class StudentClientLoad {

	public static void main(String[] args) {
		
		Configuration config= new Configuration();
		config.configure("p4_pgm_Selectop_get/hibernate.cfg.xml");
		SessionFactory session= config.buildSessionFactory();
		Session openSession = session.openSession();
		Transaction transaction=openSession.beginTransaction();
		
		Student student= (Student)openSession.load(Student.class,2); // trying to get student with id 2, not present.
		
		/*
		 * Load
		 * =========
		 * 
		 * Here if the object is not found then we will get an exception that is org.hibernate.ObjectNotFoundException
		 * 
		 * Also we should not use contains() method if we are using load function. 
		 * 
		 * Please note that we wont get this exception as soon as we call load function. When we are calling load function
		 * a dummy object or proxy object will be created of student having only one field that is id. On top of this if 
		 * we are going to call any getter function other the primary key id then we are going to get the exception.
		 * 
		 * In short we can say that when we are trying to access the property of the object then only we are going to get
		 * this exception.
		 * 
		 */
		System.out.println("student object is " + student.getSno()); // no error
		System.out.println("email of student is " + student.getSemail()); // exception occurs.
		
		/*
		 * Here object is not present and we are trying to access the object hence we are going to get the exception.
		 * This is a classic case of lazy loading. Here complete object is not loaded when we are calling the load 
		 * function but instead a dummy object is created and when are trying to access the property then only data
		 * for that specific property is loaded. And if the data is not found then we are going to get ObjectNotFoundException.
		 * 
		 * Please note that if we are trying to access the primary key property then we wont get any issue since the
		 * dummy object is created holding the value of primary key id by default.
		 * 
		 */
		
		
	
	}
}
