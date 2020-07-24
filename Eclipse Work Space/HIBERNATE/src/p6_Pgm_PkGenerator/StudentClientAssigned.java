package p6_Pgm_PkGenerator;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;



public class StudentClientAssigned {

	public static void main(String[] args) {

		Configuration config = new Configuration();
		config.configure("p6_Pgm_PkGenerator/hibernate.cfg.xml");
		SessionFactory session = config.buildSessionFactory();
		Session openSession = session.openSession();
		Transaction transaction = openSession.beginTransaction();

		Student student = new Student();
		student.setSno(123);  
		
		/*
		 * Here we are using generator of type assigned so as developer we are supposed to pass the primary key
		 * This will be used when the type of primary key we want to set if of type string or varchar.
		 * 
		 * 
		 */
		student.setSname("moti");
		student.setSemail("abdc@gmail.com");
		student.setSmobile("123451");
		
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

