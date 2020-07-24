package p7_Pgm_HQL;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class eNonSelectOp_Delete {

	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p7_Pgm_HQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		
		Query query=session.createQuery(" delete from   Student s  where  s.sname=? ");
		Transaction transaction=session.beginTransaction();
		query.setParameter(0, "agarkar");
		int result=query.executeUpdate();

		transaction.commit();
		session.close();
	}
}
