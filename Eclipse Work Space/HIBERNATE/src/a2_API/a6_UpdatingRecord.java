/*
Updting the records
======================

If we want to update the data into database we will go for update(), merge(), saveOrUpdate and so on...

update(-);
---------
It is available in session, if we want to update an object, which is already available in DB we will go 
for update().

Actual defination is when we move  a detached object, meaning an object which was previously attached to a session
to a persistant session that is inside the cache then the update query is executed.

There are two approaches to update the data in DB.

Approach1.
---------
In this approach create one new object and call the setter methods with the existing id, and pass this object to 
the update(-).

Ex
--
--
Session session=sf.openSession();
Student st=new Student();
st.setSno(2);
st.setSname("abc");
st.setSemial("abc@rameshit.com");
st.setSmobile("1234");
session.update(st);
tx.commit();

In this approach, we have to call all the setter methods even we are updating only one column.

If we are not calling all the setters it inserts null or default values.

It is not recommended approach.

approach2.
---------
In this approach load the object from the database by using load() or get() and modify or update the loaded 
object using setter methods,then call update() method by passing modified object.

--
--
Student student = (Student)session.get(Student.class,1);
student.setSemail("abc@yahoo.com");
session.update(student);
tx.commmit();

NOTE:

whenever an object is loaded from database using get()or load() method, that loaded object is stored in 
session cache or first level cache.

once an object is loaded, if we call setter methods to update the data in object, that modifications or 
updations are updated in session cache.

If we modify loaded object for multiple number of times, these modifications also updated in session cache.

After modifing an object in the session cache, if we are calling session.flush()or transaction.commit() 
session cache data is moved to the DB.
--
--
Student stduent = (Student)session.get(Student.class,1);
stedent.setMobile("99999");
session.update(student);

stedent.setMobile("88888");
session.update(student);

stedent.setMobile("77777");
session.update(student);

tx.commmit();

if we run above application we can see only one update query on the console.

NOTE:
-----
In this approach(2nd approach) calling update() is optional.
--
--
Student stduent = (Student)session.get(Student.class,1);
student.setSemail("abc@aaa.com");
tx.commmit();

above code generates the update query.




*/