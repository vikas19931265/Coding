/*
Deleting Record from the database
===========================================

deleting an object from the DB.
--------------------------------
To delete the record from the DB we will go for delete(-).

syntax: public void delete(Object object)

There are 2 approaches to delete the data from DB.

Approach 1
------------
In this approach create one new object(transient) with the existing id, and pass this object to the delete(-).

--
--
Session session=sf.openSession();
Student st=new Student();
st.setSno(2);
session.delete(st);
tx.commit();

Approach2
---------
In this approach load one object from DB using either load() or get() and pass this object to the delete(-).

--
--
Session session=sf.openSession();
Student st=(Student)session.get(Stuent.class,1);
session.delete(st);
tx.commit();



*/