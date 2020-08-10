package t3_Pgm_Annotation_Association_Mto1_B;

import java.util.HashSet;
import java.util.Set;



import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import q5_Pgm_Association_1ToM_TeamPlayer.Players;

public class Client {

	public static void main(String[] args) {

		Configuration configuration = new Configuration();
		configuration.configure("t3_Pgm_Annotation_Association_Mto1_B/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		
		
		//MANY PERSON CAN HAVE ONE ADDRESS (MANY TO ONE)
		
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
		
		//=====================================================================
		
		//ONE ADDRESS CAN BELONG TO MANY PERSON ( ONE TO MANY)  { BI DIRECTIONAL}
		
		
		Set<Person> persons = new HashSet();
		persons.add(vikas);
		persons.add(mamta);
		persons.add(swati);
		
		address.setPerson(persons);
		
		session.save(vikas);
		session.save(mamta);
		session.save(swati);
//		session.save(address);
		
		session.flush();
		transaction.commit();
		session.close();
	}
}
