package p6_Pgm_PkGenerator;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;



public class StudentClientIncrement {

	public static void main(String[] args) {

		Configuration config = new Configuration();
		config.configure("p6_Pgm_PkGenerator/hibernate.cfg.xml");
		SessionFactory session = config.buildSessionFactory();
		Session openSession = session.openSession();
		Transaction transaction = openSession.beginTransaction();

		Student student = new Student();
		student.setSno(123);  
		
		/*
		 * Here we are using generator class of type increment. So therefore HB will generate query
		 * to find out the max of the id and set the next value of id as (max(id)+1)
		 * 
		 * In this case even if we set the value of id ourself then also it has no use as the data configured
		 * in the mapping file is given the preference.
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



