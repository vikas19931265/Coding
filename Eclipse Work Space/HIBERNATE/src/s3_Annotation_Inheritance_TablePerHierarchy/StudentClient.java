package s3_Annotation_Inheritance_TablePerHierarchy;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

//Insert Student object as student record in DB.
public class StudentClient {

	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("s3_Annotation_Inheritance_TablePerHierarchy/hibernate.cfg.xml");
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
		
		SeniorStudent senior= new SeniorStudent();
		senior.setStream("commerce");
		senior.setAddress(address);
		
		JuniorStudent junior= new JuniorStudent();
		junior.setGrade("5th");
		senior.setAddress(address);
		
		
		session.save(student);
		session.save(junior);
		session.save(senior);
		
		transaction.commit();
		
		
		session.close();
	}
}
