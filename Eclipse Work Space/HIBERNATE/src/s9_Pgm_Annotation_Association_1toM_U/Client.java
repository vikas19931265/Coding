package s9_Pgm_Annotation_Association_1toM_U;

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
		configuration.configure("s9_Pgm_Annotation_Association_1toM_U/hibernate.cfg.xml");
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();

		Set<Player> players= new java.util.HashSet();
		Player player1 = new Player();
		player1.setPlayerName("MS Dhoni");
		Player player2 = new Player();
		player2.setPlayerName("Suresh Raina");
		Player player3= new Player();
		player3.setPlayerName("Dwayne Bravo");
		players.add(player1);
		players.add(player2);
		players.add(player3);
		Team csk= new Team();
		csk.setTeamName("Chennai super kings");
		csk.setPlayers(players);
		
		
		
		Set<Player> players1= new java.util.HashSet();
		Player player11 = new Player();
		player11.setPlayerName("virat kohli");
		Player player21 = new Player();
		player21.setPlayerName("AB devillers");
		Player player31= new Player();
		player31.setPlayerName("Ben cutting");
		players1.add(player11);
		players1.add(player21);
		players1.add(player31);
		Team rcb= new Team();
		rcb.setTeamName("Royal challengers banglore");
		rcb.setPlayers(players1);
		

		session.save(csk);
		session.save(rcb);

		transaction.commit();
	}
}
