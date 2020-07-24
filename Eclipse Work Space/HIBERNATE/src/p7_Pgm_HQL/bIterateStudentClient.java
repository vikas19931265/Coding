package p7_Pgm_HQL;

import java.util.Iterator;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class bIterateStudentClient {

	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p7_Pgm_HQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		Query query=session.createQuery("select s.sname, s.semail from Student s  where s.sno=5");

		Iterator student= query.iterate();   // the object iterator is going to point is going to be of Object[] type
		/*
		 * If we want to load only certain column data then going for the iterate() function call on the query object is
		 * better.
		 * 
		 * If we are going to fetch all details then go far list
		 * 
		 */
		 while(student.hasNext())
		 {
			Object[] stud=(Object[])student.next();
			String studentName=(String)stud[0];
			String studentEmail=(String)stud[1];
			System.out.println(studentName+ "\t" + studentEmail);
		 }
	
		session.close();
	}
}
