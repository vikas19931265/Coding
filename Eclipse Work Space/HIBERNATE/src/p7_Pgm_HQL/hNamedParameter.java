package p7_Pgm_HQL;

import java.util.Iterator;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class hNamedParameter {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p7_Pgm_HQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		
		Query query=session.createQuery(" from Student s where s.sno between :sno1 and :sno2"); 
		query.setInteger("sno1", 300);
		query.setInteger("sno2", 500);
		List<Student> students=query.list();

		Iterator student=students.iterator();
		while(student.hasNext())
		{
			Student studObj=(Student)student.next();
			System.out.println(studObj.getSemail() + "\t" + studObj.getSname());
		}
		
		
		session.close();
	}
}
