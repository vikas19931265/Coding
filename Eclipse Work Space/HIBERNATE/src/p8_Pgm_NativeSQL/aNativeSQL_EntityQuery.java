package p8_Pgm_NativeSQL;

import java.util.Iterator;
import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import p7_Pgm_HQL.Student;

public class aNativeSQL_EntityQuery {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p8_Pgm_NativeSQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		SQLQuery query= session.createSQLQuery("select * from TB_STUDENT where no between :sno1 and :sno2");
		/*
		 * This is entitry query since we are selecting all the records so next step is important
		 * 
		 */
		query.setInteger("sno1", 300);
		query.setInteger("sno2", 400);
		query.addEntity(Student.class); // if we are selecting all the records ( entity query)
		
		List<Student> students=query.list();
		
		/*
		 * Note: very important
		 * 
		 * If we are selecting all the records from the database then the list method will return list
		 * of objects.
		 * 
		 * And if few records are returned then the list will return list of objects array.
		 * 
		 * 
		 * 
		 */

		Iterator student=students.iterator();
		while(student.hasNext())
		{
			Student studObj=(Student)student.next();
			System.out.println(studObj.getSemail() + "\t" + studObj.getSname());
		}
		
		
		session.close();
	}
}
