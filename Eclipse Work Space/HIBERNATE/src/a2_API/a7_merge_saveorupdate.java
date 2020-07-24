/*
merge()
==================


it is defined in Session interface.

By using merge() we can update the data into DB.
or
We can copy one object into to persistant state with the same identifier.

If we want to convert the detached state object or transient state object to the persistant state we will go 
for update() or merge();

In this conversation(detached to persistant or transient to persistant using update), if the session already 
contain object with the same identifier then we will get the exception saying
org.hibernate.NonUniqueObjectException: a different object with the same identifier value was already
associated with the session: [Student#1].

Ex:
Student student1 = (Student)session.get(Student.class, 1);
//remove student from session
session.evict(student1);
//multiple lines code
Student student2 = (Student)session.get(Student.class, 1);
student1.setSmobile("4321");
session.update(student1);
transaction.commit();
		
If we run above application we will get the exception. Because when we get student2 object from db using get method student object
with a primary key is already present in the database. Now student1 is also the same object which is evicted from 
the database having same id. So when we try to update student1 object we are trying to move it to session cache bascially
and since already same object with id is available we are going to get NonUniqueObjectException.

To resolve above exception we will go for merge(-) method.

Student student1 = (Student)session.get(Student.class, 1);
//remove student from session
session.evict(student1);
//multiple line code
Student student2 = (Student)session.get(Student.class, 1);
student1.setSmobile("4321");
session.merge(student1);
transaction.commit();

merge(-) combines the two objects into one object(copy one object into another object
), it that two objects having same id.


saveOrUpdate()
========================


saveOrUpdate() is used to insert or update the record in the DB.

If the object is already available in DB, then it updates the data.
If the object is not available in DB, then it inserts the data.

NOTE:
before calling saveOrUpate(), hb software internally calls select query to know the current state of an object, 
based the state hb s/w performs either save or update.


*/