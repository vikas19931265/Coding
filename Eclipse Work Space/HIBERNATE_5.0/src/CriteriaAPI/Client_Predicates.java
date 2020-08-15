package CriteriaAPI;


import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Client_Predicates {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("CriteriaAPI/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();

		CriteriaBuilder cb = session.getCriteriaBuilder();

		CriteriaQuery<Student> cr = cb.createQuery(Student.class);
		Root<Student> root = cr.from(Student.class);
		CriteriaQuery<Student> select = cr.select(root);


		Predicate[] predicates= new Predicate[2];
		predicates[0]=cb.equal(root.get("sno"), 4);
		predicates[1]=cb.like(root.get("sname"),"%andy%");
		
		// AND OPERATION
		List<Student> students= session.createQuery(select.where(predicates)).getResultList();  // it will be and operation all predicates will be held by and
		
		for(Student stud : students)
		{
			System.out.println("student name is "+ stud.getSname());
		}
		
		
		// OR operation
		
		Predicate[] predicates1= new Predicate[2];
		predicates1[0]=cb.equal(root.get("sno"), 4);
		predicates1[1]=cb.like(root.get("sname"),"%andy%");
		List<Student> students1=session.createQuery(select.where(cb.or(predicates1))).getResultList();
		for(Student stud : students1)
		{
			System.out.println("student name is "+ stud.getSname());
		}
		
		
		transaction.commit();
		session.close();

	}
}
