/*

4. Hibernate Client application.
=================================================


Any java, j2ee and framework based applications acts as client for hibernate.

In hibernate client application, we will use the hibernate API, to connect the DB.

Ex:

//StudentInsert.java

import org.hibernate.cfg.Configuration;
import org.hibernate.SessionFactory;
import org.hibernate.Session;
import org.hibernate.Trasaction;

public class StudentInsert {
public static void main(String[] args) {

Configuration config = new Configuration();
Configuration cf = config.configure();

SessionFactory sf = cf.buildSessionFactory();

Session session =sf.openSession();

Transaction transaction = session.beginTransaction();

Student student = new Student();
student.setSno(1);
student.setSname("Abc");
student.setSemail("abc@gmail.com");
student.setSmobile("12345");
session.save(student);//insert the record
transaction.commit();
}
}

*/

