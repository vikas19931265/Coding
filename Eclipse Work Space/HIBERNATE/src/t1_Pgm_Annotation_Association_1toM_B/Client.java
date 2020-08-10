package t1_Pgm_Annotation_Association_1toM_B;

import java.util.HashSet;
import java.util.Set;

/*
 * One employee can have only one pan number, and one pan number can belong to only only one person.
 * 
 * Here we are going to use the bidirection concept that is from both the side pan and employee class
 * we can give the respective other object.
 * 
 * 
 * 
 */

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import q5_Pgm_Association_1ToM_TeamPlayer.Players;

public class Client {

	public static void main(String[] args) {

		Configuration configuration = new Configuration();
		configuration.configure("t1_Pgm_Annotation_Association_1toM_B/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		

        Employer employer = new Employer();  
        employer.setEmployerName("Employer 1");  
          
        Set<Employee> employees = new HashSet<Employee>();  
          
        Employee employee1 = new Employee();  
        employee1.setEmployeeName("Trevor Page");  
        employee1.setEmployer(employer);  
        employees.add(employee1);  
          
        Employee employee2 = new Employee();  
        employee2.setEmployeeName("John Doe");  
        employee2.setEmployer(employer);  
        employees.add(employee2);  
		
        employer.setEmployees(employees);  
        
		session.save(employer);

		transaction.commit();
	}
}
