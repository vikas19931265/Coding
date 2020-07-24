package p5_Pgm_Versioning;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;


public class StudentClient {

	public static void main(String[] args) {

		Configuration config = new Configuration();
		config.configure("p5_Pgm_Versioning/hibernate.cfg.xml");
		SessionFactory session = config.buildSessionFactory();
		Session openSession = session.openSession();
		Transaction transaction = openSession.beginTransaction();

		Student student= (Student)openSession.get(Student.class,5);
		student.setSname("sarwan123");
		

		openSession.save(student);
		transaction.commit();
		openSession.close();

	}
}


/*
 * 
 * <version name="version" column="VERSION"></version>
 * 
 * If we set the version in mapping, for every change or update the number will get updated. Using this
 * we can keep track of the changes dont to particular record.
 * 
 * 
 */

