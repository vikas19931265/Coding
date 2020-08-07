package s5_Pgm_Annotation_Association_1to1;

/*
 * One employee can have only one pan number, and one pan number can belong to only only one person.
 * 
 * Here we are going to use the bidirection concept that is from both the side pan and employee class
 * we can give the respective other object.
 * 
 * 
 * 
 */

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Client {

	public static void main(String[] args) {

		Configuration configuration = new Configuration();
		configuration.configure("s5_Pgm_Annotation_Association_1to1/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();

		Employee emp = new Employee();
		PAN pan = new PAN();
		pan.setPanNumber("AXBPV0912A");
		emp.setName("Vikas");
		pan.setEmployee(emp);

		
		PAN pan2 = new PAN();
		pan2.setPanNumber("AXFSUIU");
		Employee emp2 = new Employee();
		emp2.setName("Ravi");
		pan2.setEmployee(emp2);
		

		session.save(pan);
		session.save(pan2);

		transaction.commit();
	}
}
