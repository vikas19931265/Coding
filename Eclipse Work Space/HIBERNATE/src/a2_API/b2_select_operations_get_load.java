package a2_API;

/*

Select operations
==================================

To select an object from the DB we will go for either get(--) or load(--)

By using these methods we will get only single record.

load();
------
syntax
------
		public Object load(Class theClass, Serializable id)

--it returns proxied object.

--incomplete object or un initiliazed object is called proxied object. 

proxied object will be intialized on demand, that means whenever we are calling getter methods on pojo 
other than id(pk) property, proxied object will be intialized.

--lazily loads the data, when required 

--throws ObjectNotFoundException when the object was not available in the table.

Ex:
--
--
Session session = sf.openSession();
Student student = (Student)session.load(Student.class, 1);
//retrive the data from student by using getter methods

NOTE:
when we load the object by using either load(--) or get(--), loaded object is associated with session or 
level1 cache means load() or get() methods returns persistant instance.

while working with select operations in HB, creating transaction object is not required. but it is 
mandatory while working with non select(insert, update, delete) operations.

how can we avoid lazy loading even though your working with session.load(-, -)?
=====================================================================================


By using following method we can avoid lazy loading.

public void load(Object object, Serializable id);

ex:
--
--
Student student = new Student();
session.load(student, 1);
--
--


get();
========================

get() method is used to get the record from the DB.

syntax:
-------
public Object get(Class class, Serializable id)

--it returns persistant object

--it never returns proxied object or uninitialized object.

--eagerly loads DB data, that means it doesn't perform lazy loading, it performs early loading.

--returns 'null' when the object(row) is not available in DB.

--
--
Session session = sf.openSession();
Student student = (Student)session.get(Student.class, 1);
//retrive the data from student by using getter methods

NOTE:
if we are calling get(--) multiple times by passing same pk value, hb returns existing object.


*/