package q6_Pgm_Association_Mto1_PersonAddress;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Client {


		public static void main(String[] args) {
			
				Configuration configuration = new Configuration();
				configuration.configure("q6_Pgm_Association_Mto1_PersonAddress/hibernate.cfg.xml");
				SessionFactory sessionFactory = configuration.buildSessionFactory();
				Session session = sessionFactory.openSession();
				Transaction transaction = session.beginTransaction();
				
				// make one address
				
				Address address1 = new Address();
				address1.setStreet("kabilar street");
				address1.setState("Tamil nadu");
				
				Person person1= new Person();
				person1.setName("vikas gautam");
				person1.setAddress(address1);

				Person person2= new Person();
				person2.setName("swati gautam");
				person2.setAddress(address1);

				Person person3= new Person();
				person3.setName("radhika");
				Address address2= new Address();
				address2.setStreet("bahadur nagar");
				address2.setState("Uttar pradesh");
				person3.setAddress(address2);

				session.save(person1);
				session.save(person2);
				session.save(person3);
				
				transaction.commit();
		}
	}

	
