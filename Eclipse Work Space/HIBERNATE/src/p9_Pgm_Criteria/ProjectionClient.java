package p9_Pgm_Criteria;

import java.util.Iterator;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;


//Insert Student object as student record in DB.
public class ProjectionClient {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("p9_Pgm_Criteria/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		
		//step1
		Criteria createCriteria = session.createCriteria(Student.class);
		
		ProjectionList proList= Projections.projectionList();
		proList.add(Projections.property("sno")); // select only certain columns
		proList.add(Projections.property("sname"));
		
		createCriteria.setProjection(proList);
		
		//Adding restrictions (like where)
		
		Criterion criterion=Restrictions.gt("sno", 300);
		createCriteria.add(criterion);
		List<Object[]> stud=createCriteria.list();
		
		Iterator itr=stud.iterator();
		
		while(itr.hasNext())
		{
			Object[] student=(Object[])itr.next();
			int sno=(Integer)student[0];
			String sname=(String)student[1];
			System.out.println(sno+"\t" + sname);
		}
		
		
	}
}
