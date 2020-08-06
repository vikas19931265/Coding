package s1Pgm_Annotations_Basic_PkGen;


import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;



public class Client {

	public static void main(String[] args) {

		Configuration config = new Configuration();
		config.configure("s1Pgm_Annotations_Basic_PkGen/hibernate.cfg.xml");
		SessionFactory session = config.buildSessionFactory();
		Session openSession = session.openSession();
		Transaction transaction = openSession.beginTransaction();

		Student student = new Student();
		student.setAddress("Kabilar Street");
		student.setName("Vikas Gautam");
		
		
		openSession.save(student);
		transaction.commit();
		openSession.close();

	}
}



