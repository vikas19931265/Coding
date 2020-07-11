package a1_BASICS;
/*

Persistance
=================

Persistance means permanent storage area(i.e either Files or DB).
or 
persistance means storing the data in relational database using SQL. 

The logic which is used to connect with the Database or persistance storage area is called  persistance logic.

By using I/O streams, JDBC, Spring DAO, ORM tool(Hibernate, JPA ....) we can store the data into permanent place.


Limitations of JDBC
==============================

1.JDBC based persistance logic is database dependent logic, because  jdbc allows only sql queries. 

2.In JDBC connection properties (driverclass, url, username and password) are hardcoded in java code, which is against
 for industry coding standards.

3.Exception handling and transaction management is very difficult in jdbc.

4.ResultSet object was not implemented Serializable interface, so we can't send the resultset object to the another layer through network.

5.JDBC doesnt support cache mechanism by default.

6.jdbc doesn't support to send the data in the form of objects, it allows to send the data in the form of text or
 individual values.

7.Here if we open the connection we are the responsible to close the connection, if not close the connection object 
there is a chance of getting out of memory error.

8.working with associations are very difficult.

9.It increases the development time

10.it dosnt support lazy loading.


ORM
===================

It is a process of providing the mapping between java class name with table name, properties with column names and object 
data with row data is called ORM.


By using ORM we can develop DB independent persistance logic.

NOTE:All the ORM s/w internally uses JDBC code to perform persistance operations. so on top of the jdbc hb people 
developed the HB s.w.

Ex of ORM

Hibernate(Redhat)
JPA(Java Persistance API)(Sun Micro system)
toplink(Oracle)
EJB EntityBean(Sun ms)
Ibatis(Apache)
--



*/