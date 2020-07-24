package p7_Pgm_HQL;

import java.util.Iterator;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class cIterateStudentClient_FetchSingleColumn {

	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p7_Pgm_HQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		Query query=session.createQuery("select s.sname from Student s  where s.sno=5");

		Iterator student= query.iterate();   
		
		/*
		 * Here in this case since only one column type is returned. Therefore datatype holding this will not be
		 * Object[] but Object only. From this Object we can extract the Student name.
		 * 
		 * 
		 */
		
		 while(student.hasNext())
		 {
			Object stud=(Object)student.next();
			String studentName=(String)stud;
			System.out.println(studentName+ "\t" ); // sarwan123
		 }
	
		session.close();
	}
}
