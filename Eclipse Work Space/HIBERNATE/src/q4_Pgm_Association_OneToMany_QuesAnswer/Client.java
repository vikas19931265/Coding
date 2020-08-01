package q4_Pgm_Association_OneToMany_QuesAnswer;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Client {


		public static void main(String[] args) {
			
				Configuration configuration = new Configuration();
				configuration.configure("q4_Pgm_Association_OneToMany_QuesAnswer/hibernate.cfg.xml");
				SessionFactory sessionFactory = configuration.buildSessionFactory();
				Session session = sessionFactory.openSession();
				Transaction transaction = session.beginTransaction();
				
				
				List<Answers> answers= new ArrayList();
				Answers ans1= new Answers();
				ans1.setAnswername("Java is a game");
				ans1.setPostedBy("vikas");
				
				Answers ans2= new Answers();
				ans2.setAnswername("Java is a Servlet API");
				ans2.setPostedBy("gautam");
				

				Answers ans3= new Answers();
				ans3.setAnswername("Java is a Programming language");
				ans3.setPostedBy("amit");

				
				answers.add(ans1);
				answers.add(ans2);
				answers.add(ans3);

				Question question= new Question();
				question.setQuestion("What is Java?");
				question.setAnswers(answers);
				
				List<Answers> answers2= new ArrayList();
				Answers ans12= new Answers();
				ans12.setAnswername("gamer");
				ans12.setPostedBy("ajay");
				
				Answers ans21= new Answers();
				ans21.setAnswername("computer guy");
				ans21.setPostedBy("singh");
				

				Answers ans31= new Answers();
				ans31.setAnswername("businessman");
				ans31.setPostedBy("jadeja");

				
				answers2.add(ans12);
				answers2.add(ans21);
				answers2.add(ans31);

				Question question1= new Question();
				question1.setQuestion("Who is steve jobs");
				question1.setAnswers(answers2);
				
				
				
				
				session.save(question1);
				session.save(question);
				transaction.commit();
		}
	}

	
