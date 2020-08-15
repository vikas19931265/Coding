package CriteriaAPI;

import java.util.List;
import java.util.function.Predicate;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

public class Client_WHERE {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure("CriteriaAPI/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction=session.beginTransaction();
		
		//===============************INSERT RECORD*************************=======================================
		
		Student vikas= new Student();
		vikas.setSemail("gautamv725@gmail.com");
		vikas.setSmobile("7092198142");
		vikas.setSname("andy flower");
		session.save(vikas);
		
		
		//===================================*******CRITERIA API JPA ***************************************************
		/*
		 * The Criteria API allows us to build up a criteria query object programmatically, where we can apply different kind of 
		 * filtration rules and logical conditions.
		 * 
		 * Since hibernate 5.2 , hiberate criteria API is depricated and we use JPA criteria API.
		 * 
		 */
		
		  //Create an instance of CriteriaBuilder by calling the getCriteriaBuilder() method
		  CriteriaBuilder cb=session.getCriteriaBuilder();

		  //Create an instance of CriteriaQuery by calling the CriteriaBuilder createQuery() method
		  CriteriaQuery<Student> cr=cb.createQuery(Student.class);
		 
		  
		  Root<Student> root=cr.from(Student.class);
		  CriteriaQuery<Student> select =cr.select(root);
		  
		  Query<Student> query = session.createQuery(cr);

		  List<Student> stud = query.getResultList();
		
		  for (Student student : stud) {
		
			  System.out.println(student.getSemail() + "\t" + student.getSname());
		
		  }
		  
		  //=====================================*****WHERE****************************
		  
		  CriteriaQuery<Student> cq= select.where(cb.gt(root.get("sno"), 1));
		  List<Student> students=session.createQuery(cq).getResultList();
		  for(Student stu : students)
		  {
			  System.out.println("student is " + stu.getSname());
		  }
		  
		 //Student student= session.createQuery(select.where(cb.equal(root.get("sno"), 3))).getSingleResult();
		 // System.out.println("student is "+ student.getSname());
		  
		  
		
			transaction.commit();
			session.close();
	
	}
}
