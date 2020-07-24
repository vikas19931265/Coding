package p7_Pgm_HQL;

import java.util.Iterator;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class fAggregate {

	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p7_Pgm_HQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		
		Query query=session.createQuery(" select max(s.sno) from Student s "); // note casing of everything about pojo is important

		Iterator record= query.iterate();
		while(record.hasNext())
		{
			int count= (Integer)record.next();
			System.out.println("max record id is " + count); //max record id is 400
		}
		
		session.close();
	}
}
