package p8_Pgm_NativeSQL;

import java.util.Iterator;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.type.StringType;

public class d_NamedSQLQuery_EntityType {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p8_Pgm_NativeSQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		Query query=session.getNamedQuery("select_all_column_sql");
		List students=query.list();

		Iterator student=students.iterator();
		while(student.hasNext())
		{
			Student studObj=(Student)student.next();
			System.out.println(studObj.getSname());
		
		}
		
		session.close();
	}
}
