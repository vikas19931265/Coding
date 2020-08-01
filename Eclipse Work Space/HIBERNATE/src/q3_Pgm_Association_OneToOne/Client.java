package q3_Pgm_Association_OneToOne;

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
		configuration.configure("q3_Pgm_Association_OneToOne/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();

		Employee emp = new Employee();
		PAN pan = new PAN();
		emp.setName("Vikas");
		pan.setPanNumber("AXBPV0912A");
		emp.setPanNumber(pan);
		pan.setEmployee(emp);

		Employee emp1 = new Employee();
		emp1.setName("Ravi");
		emp1.setPanNumber(pan);
		
		/*
		 * PAN pan1 = new PAN(); emp1.setName("Ravi"); pan1.setPanNumber("AXBPV0912A");
		 * emp1.setPanNumber(pan1);
		 */

		/*
		 * Trying to assign same pan number to another person
		 */

		session.save(emp);
		session.save(emp1);

		transaction.commit();
	}
}
