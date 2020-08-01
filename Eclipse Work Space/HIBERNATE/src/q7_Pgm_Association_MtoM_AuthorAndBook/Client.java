package q7_Pgm_Association_MtoM_AuthorAndBook;

import java.util.HashSet;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Client {


		public static void main(String[] args) {
			
				Configuration configuration = new Configuration();
				configuration.configure("q7_Pgm_Association_MtoM_AuthorAndBook/hibernate.cfg.xml");
				SessionFactory sessionFactory = configuration.buildSessionFactory();
				Session session = sessionFactory.openSession();
				Transaction transaction = session.beginTransaction();
				
				//one author can have many books
				
				Author author = new Author();
				author.setAuthorName("chetan bhagat");
				Set<Book> books= new HashSet();
				Book book1 = new Book();
				book1.setBookName("half girlfiriend");
				Book book2 = new Book();
				book2.setBookName("Revolution 2020");
				books.add(book2);
				books.add(book1);
				author.setBooks(books);
				
				
				// one book can have many authors
				
				Author author2= new Author();
				author2.setAuthorName("vikas gautam");
				author2.setBooks(books);
				

				session.save(author);
				session.save(author2);
				
				transaction.commit();
		}
	}

	
