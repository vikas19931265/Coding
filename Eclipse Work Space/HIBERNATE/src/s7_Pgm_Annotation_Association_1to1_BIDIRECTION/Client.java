package s7_Pgm_Annotation_Association_1to1_BIDIRECTION;

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
		configuration.configure("s7_Pgm_Annotation_Association_1to1_BIDIRECTION/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();

		Address address1= new Address();
		address1.setCity("Chennai");
		address1.setState("Tamil Nadu");
		address1.setZipCode("600114");
		address1.setStreet("Kabilar street");
		
		Student student1= new Student();
		student1.setAddress(address1);
		student1.setStudentName("vikas gautam");
		address1.setStudent(student1);
		
		
		Address address2= new Address();
		address2.setCity("rae bareli");
		address2.setState("uttar pradesh");
		address2.setZipCode("229306");
		address2.setStreet("bahadur nagaar");
		
		Student student2= new Student();
		student2.setAddress(address2);
		student2.setStudentName("ram kewal");
		address2.setStudent(student2);
		
		session.save(student1);
		session.save(student2);

		transaction.commit();
	}
}
