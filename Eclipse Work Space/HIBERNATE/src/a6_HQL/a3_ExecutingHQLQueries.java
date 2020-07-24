/*
Executing HQL Queries
===========================

If you want to execute an hql query we will go for Query object

Query is an interface defined in org.hibrenate package.

--org.hibernate.Query object represents HQL query in hibernate appplication.

--Query object means, it is an object of class, that implements org.hibernate.Query interface (QueryImpl).

Inorder to get the Query object we need to call createQuery(-) method, given in Session interface.

syntax:
public Query createQuery(String hqlQuery)

NOTE:
To perform either select operations or non select operations we will go for Query interface.

Query query = session.createQuery("from Student"); 

Note:
=================

To perform select operations Tx object not required.

To perform non select operations tx object is mandatory.


Select operations
=============================

In hql to select the data from the DB we will go for either list() or iterate().
syntax:
public List list();
public Iterator iterate();

Steps to work with HQL
=======================================

1.
get the session object

2.
Write the HQL query as per your requirement
String hqlQuery="from Student";

3.
create Query object by using createQuery(-) method.

Query query = session.createQuery("from Student");

4.
If the query contains parameters, set those parameter values.

5.
Use the Query methods to perform CURD operations
   list() or iterate()-- for select queries
   executeUpdate() for non select queries.


*/