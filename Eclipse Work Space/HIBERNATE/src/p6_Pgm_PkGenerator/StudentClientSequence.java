package p6_Pgm_PkGenerator;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;



public class StudentClientSequence {

	public static void main(String[] args) {

		Configuration config = new Configuration();
		config.configure("p6_Pgm_PkGenerator/hibernate.cfg.xml");
		SessionFactory session = config.buildSessionFactory();
		Session openSession = session.openSession();
		Transaction transaction = openSession.beginTransaction();

		Student student = new Student();
		student.setSno(123);  
		
		/*
		 * In this case we are using generator of sequence type. And therefore the starting value for
		 * any new record henceforth is going to be 200 and we are doing increment by 100 so further
		 * records will take value 300..400 and so on.
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
 * 10	0	moti	abdc@gmail.com	123451
300	0	moti	abdc@gmail.com	123451
400	0	moti	abdc@gmail.com	123451
5	1	sarwan123	abdc@gmail.com	123451
6	0	moti	abdc@gmail.com	123451
7	0	moti	abdc@gmail.com	123451
8	0	moti	abdc@gmail.com	123451
123	0	moti	abdc@gmail.com	123451
124	0	moti	abdc@gmail.com	123451
200	0	moti	abdc@gmail.com	123451
 * 
 * 
 * 
 */



