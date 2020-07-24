package p1_Pgm_BasicInsert;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

//Insert Student object as student record in DB.
public class StudentClient {

	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p1_Pgm_BasicInsert/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		Student student = new Student();
		student.setSno(6);
		student.setSname("moti");
		student.setSemail("abdc@gmail.com");
		student.setSmobile("123451");
		//Insert record
		
		session.save(student);
		/*
		 * this function return serializiable object like int, number. So before the object is persisted inside
		 * the database a primary key is generated . This method return the primary key for that object.
		 */
		
		session.flush(); // automatically called if we do transaction.commit.
		transaction.commit();
		session.close();
	}
}
