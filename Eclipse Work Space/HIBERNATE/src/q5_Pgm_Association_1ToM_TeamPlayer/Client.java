package q5_Pgm_Association_1ToM_TeamPlayer;

import java.util.HashSet;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Client {


		public static void main(String[] args) {
			
				Configuration configuration = new Configuration();
				configuration.configure("q5_Pgm_Association_1ToM_TeamPlayer/hibernate.cfg.xml");
				SessionFactory sessionFactory = configuration.buildSessionFactory();
				Session session = sessionFactory.openSession();
				Transaction transaction = session.beginTransaction();
				
				// make one team
				
				Team team = new Team();
				team.setTeamName("Chennai Super Kings");
				//make a set of players and add to the team
				
				Players player1= new Players();
				player1.setPlayerName("Suresh Raina");
				

				Players player2= new Players();
				player2.setPlayerName("MS Dhoni");
				

				Players player3= new Players();
				player3.setPlayerName("Dwanyne Bravo");
				
				Set<Players> players = new HashSet();
				players.add(player1);
				players.add(player2);
				players.add(player3);
				
				team.setPlayers(players);
				
				Team team2 = new Team();
				team2.setTeamName("Mumbai Indians");
				//make a set of players and add to the team
				
				Players player11= new Players();
				player11.setPlayerName("Rohit Sharma");
				

				Players player21= new Players();
				player21.setPlayerName("Jasprit Bumrah");
				

				Players player31= new Players();
				player31.setPlayerName("Lasith Malinga");
				
				
				
				Set<Players> players1 = new HashSet();
				players1.add(player11);
				players1.add(player21);
				players1.add(player31);
				
				team2.setPlayers(players1);
				
				
				session.save(team);
				session.save(team2);
				transaction.commit();
		}
	}

	
