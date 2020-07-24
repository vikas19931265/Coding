/*

Non select operations
==========================================

To perform non select operations(update, delete) in hql we will go for excuteUpdate();

syntax:
public int excuteUpdate()

write a program to update the data using hql
page 13 line no 502
--
--
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();
		
String myhql = "update Student as s set s.semail=? where s.sno>?"	;
		
Query query = session.createQuery(myhql);
	
query.setParameter(0, "abc@rameshit.com");
query.setParameter(1, 700);
		
int result = query.executeUpdate();
tx.commit();
	
write a program to delete the data from DB using hql
page 14 line 531

Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();
Query query = session.		.createQuery("delete from Student s where s.sno>200");
	
int i = query.executeUpdate();
System.out.println("The no of record(s) deleted: " + i);
tx.commit();
	
NOTE:

we never used hql to perform insert operations.
While working non select operations creating tx object is mandatory.




*/