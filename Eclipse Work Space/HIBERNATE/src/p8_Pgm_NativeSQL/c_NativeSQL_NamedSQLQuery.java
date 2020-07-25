package p8_Pgm_NativeSQL;

import java.util.Iterator;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.type.StringType;

public class c_NativeSQL_NamedSQLQuery {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p8_Pgm_NativeSQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		Query query=session.getNamedQuery("GET_DETAILS");
		query.setInteger("sno1", 300);
		List students=query.list();

		Iterator student=students.iterator();
		while(student.hasNext())
		{
			Object[] studObj=(Object[])student.next();
			int studentNo=(Integer)studObj[0];
			String studentEmail=(String)studObj[1];
			System.out.println(studentNo+ "\t" + studentEmail);
		
		}
		
		
		session.close();
	}
}
