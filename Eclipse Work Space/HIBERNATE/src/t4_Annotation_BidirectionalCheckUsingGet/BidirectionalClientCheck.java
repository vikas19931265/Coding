package t4_Annotation_BidirectionalCheckUsingGet;

import java.util.HashSet;
import t3_Pgm_Annotation_Association_Mto1_B.Address;
import t3_Pgm_Annotation_Association_Mto1_B.Person;
import java.util.Set;
import java.util.*;



import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import p4_pgm_Selectop_get_load.Student;
import q5_Pgm_Association_1ToM_TeamPlayer.Players;

public class BidirectionalClientCheck {
	public static void main(String[] args) {

		Configuration configuration = new Configuration();
		configuration.configure("t4_Annotation_BidirectionalCheckUsingGet/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();

		Person person= (Person)session.get(Person.class, 1);
		System.out.println(person.getPersonName());
		Address address= (Address)session.get(Address.class,2); // trying to get address with id 2, not present.
		Set<Person> persons=address.getPerson();
		for(Person per: persons)
		{
			System.out.println(per.getPersonName());
		
		} 
	}
}
