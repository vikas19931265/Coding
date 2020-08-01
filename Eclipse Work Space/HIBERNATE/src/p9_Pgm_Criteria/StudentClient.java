package p9_Pgm_Criteria;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import javassist.bytecode.Descriptor.Iterator;

//Insert Student object as student record in DB.
public class StudentClient {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p9_Pgm_Criteria/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		//step1
		Criteria createCriteria = session.createCriteria(Student.class); // like select * from emp
		//condition 1
		Criterion criteria= Restrictions.gt("sno", 300);
		createCriteria.add(criteria);
		
		//condition 2

		Criterion criteria2= Restrictions.like("sname", "%mot%");
		createCriteria.add(criteria2);
		 
		List<Student> stud=createCriteria.list();
	
		for(Student student : stud)
		{
			System.out.println(student.getSemail() + "\t" + student.getSname());
		}
	}
}
