package t2_Pgm_Annotation_Association_Mto1_U;

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
		configuration.configure("t2_Pgm_Annotation_Association_Mto1_U/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		
		Address address = new Address();
		address.setCity("chennai");
		address.setState("tamil nadu");
		address.setStreet("kabilar streeet");
		address.setZipCode("600114");
		
		Person vikas= new Person();
		vikas.setPersonName("vikas gautam");
		
		Person mamta= new Person();
		mamta.setPersonName("mamta gautam");
		
		Person swati= new Person();
		swati.setPersonName("swati gautam");
		
		vikas.setAddress(address);
		mamta.setAddress(address);
		swati.setAddress(address);
		
		
		Address address1 = new Address();
		address1.setCity("rae bareli");
		address1.setState("uttar pradesh");
		address1.setStreet("bahadur nagar");
		address1.setZipCode("229303");
		
		Person sivsagar= new Person();
		sivsagar.setPersonName("siv sagar");
		
		Person amma= new Person();
		amma.setPersonName("amma");
		
		Person babloo= new Person();
		babloo.setPersonName("babloo");
		
		vikas.setAddress(address);
		mamta.setAddress(address);
		swati.setAddress(address);
		
		
		sivsagar.setAddress(address1);
		amma.setAddress(address1);
		babloo.setAddress(address1);
        
		session.save(vikas);
		session.save(mamta);
		session.save(swati);
		
		session.save(sivsagar);
		session.save(amma);
		session.save(babloo);

		transaction.commit();
	}
}
