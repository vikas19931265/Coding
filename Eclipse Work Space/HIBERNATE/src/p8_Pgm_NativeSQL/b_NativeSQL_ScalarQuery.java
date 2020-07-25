package p8_Pgm_NativeSQL;

import java.util.Iterator;
import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.type.IntegerType;
import org.hibernate.type.StringType;

import p7_Pgm_HQL.Student;

public class b_NativeSQL_ScalarQuery {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p8_Pgm_NativeSQL/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		SQLQuery query= session.createSQLQuery("select name,email from TB_STUDENT where no between :sno1 and :sno2");
		/*
		 * This is entitry query since we are selecting all the records so next step is important
		 * 
		 */
		query.setInteger("sno1", 300);
		query.setInteger("sno2", 400);
		
		query.addScalar("name", new StringType()); // mandatory for scalar query to prevent class cast exception
		query.addScalar("email", new StringType());
		
		
		
		List students=query.list();

		Iterator student=students.iterator();
		while(student.hasNext())
		{
			Object[] studObj=(Object[])student.next();
			String studentName=(String)studObj[0];
			String studentEmail=(String)studObj[1];
			System.out.println(studentName+ "\t" + studentEmail);
		
		}
		
		
		session.close();
	}
}
