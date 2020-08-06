package s2_Annotation_ComponentMapping;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

//Insert Student object as student record in DB.
public class StudentClient {

	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("s2_Annotation_ComponentMapping/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		Transaction transaction= session.beginTransaction();
		// create one address object first.
		
		Address address = new Address();
		address.setCity("chennai");
		address.setState("Tamil nadu");
		address.setZipCode("600114");
		address.setStreet("kabilar street");
		
		// create one student object.
		
		Student student = new Student();
		student.setAddress(address);
		student.setName("vikas");
		
		session.save(student);
		transaction.commit();
		
		
		session.close();
	}
}
