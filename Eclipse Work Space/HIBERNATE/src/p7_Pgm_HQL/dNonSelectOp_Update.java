package p7_Pgm_HQL;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class dNonSelectOp_Update {

	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p7_Pgm_HQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		
		Query query=session.createQuery(" update  Student s  set s.sname=? where s.sno=?");
		Transaction transaction=session.beginTransaction();
		query.setParameter(0, "agarkar");
		query.setParameter(1, 5);
		int result=query.executeUpdate();

		transaction.commit();
		session.close();
	}
}
