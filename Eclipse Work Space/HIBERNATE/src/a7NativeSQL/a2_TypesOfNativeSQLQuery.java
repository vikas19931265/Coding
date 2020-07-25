/*

Entity Queries
===================================

it returns all the columns of a table.

Entity query should be mapped with HB pojo class.So we can get the results in the form of POJO class objects type.

NOTE:If we are not providing the mapping we will get ClassCastException.

By using addEntity(-) we can mapped entity query with pojo class 

syntax:
public SQLQuery addEntity(Class entityType)

write a program for entity query.
page 14 line 569-590

--
--
SQLQuery query = session.createSQLQuery("SELECT * FROM TB_STUDENT");
query.addEntity(Student.class);
List<Student> list = query.list();
--
--

Scalar Queries
===============================
it returns specific columns of the DB table.

NOTE: Scalar query related columns should be mapped with hibernate data types. if we are not maaped there is chance of 
getting ClassCastException.

By using addScalar(-, -) we can mapped scalar query column with hibernate data types.

addScalar(--) defined in SQLQuery interface.

syntax:
public SQLQuery addScalar(String columnAlias, Type type)

ex: select NO, EMAIL from TB_STUDENT



NOTE:Generally to get the data from DB we will use either list() or iterate(). But in Native SQL, if we are using iterate() 
it throws an exception saying UnsupportedOperationException : 

SQL queries do not currently support iteration

Native SQL supports aggregate functions.


Native sql supports to execute non select queries.



*/
