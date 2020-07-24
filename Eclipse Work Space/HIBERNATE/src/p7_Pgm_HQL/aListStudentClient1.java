package p7_Pgm_HQL;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import java.util.*;

public class aListStudentClient1 {

	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p7_Pgm_HQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		Query query=session.createQuery("from Student s");
		@SuppressWarnings("unchecked")
		List<Student> students = query.list();
		
		/*
		 * In this case early loading will be performed and and all the objects from the db will be loaded via
		 * the pojo class object.
		 * 
		 * Please note that whenever we want to load all the objects from the db my making a single hit to the
		 * database then we should always go for the list() function.
		 * 
		 * 
		 */
		for(Student stud: students)
		{
			System.out.println(stud.getSname() + " \t" + stud.getSmobile()+ "\t" + stud.getSno());
		}
		
		session.close();
	}
}
