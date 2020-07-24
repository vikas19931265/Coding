/*

Inserting the record in to DB.
=============================================

To insert the record into DB we can use either save() or persist() methods.

save(-)
------
It is defined in Session interface, by using this method we can save or insert the record into DB.(but this is not
actual defination according to given defination....save method never inserts the record but instead moves the 
newly created object into the session cache. And after the call of flush() method only the object is finally
persisted into the the database.

syntax:
public Serializable save(Object object) throws HibernateException;

Ex:
--
--
--
Session session = sf.openSession();
Student student = new Student();
student.setSno(2);
student.setSname("Abc");
student.setSemail("abc@gmail.com");
student.setSmobile("12345");
session.save(student);
session.beginTransaction().commit();

NOTE:

If we are calling session.save(-) method by passing student object, transient object will become
persistant object, means student object is given to the session cache or level1 cache.

persist(-)
---------
It is also defined in Session used to insert the record into db.

syntax: public void persist(Object object) throws HibernateException.

Ex:
--
--
--
Session session = sf.openSession();
Student student = new Student();
student.setSno(2);
student.setSname("Abc");
student.setSemail("abc@gmail.com");
student.setSmobile("12345");
session.persist(student);

Diff b/w save() and persist()
-----------------------------
both methods are used to insert the record in the table.

save() returns Serializable object, that means before inserting the record in to the table, if we 
want to know the primary key  value for the current record then will go for save().

Ex:
--
--
Serializable serializable = session.save(student);

Integer pkno = (Integer) serializable;
sop(pkno);

But persist() never return any value, it returns simply void.



*/