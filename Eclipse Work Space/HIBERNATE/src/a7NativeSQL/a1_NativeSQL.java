/*
Native SQL
==================

--This is another approach to perform bulk operations.

--Native SQL queries are nothing but DB specific queries, so native SQL queries based persistance logic is
 DB dependent persistance logic.

--while migrating JDBC application into hibernate, the task will become simple, because JDBC uses direct SQL queries and 
Hibernate also supports the same queries by using Native SQL.

--Native Sql queries allows to work with both positional parameters (?) and named parameters(:label).

-- by using native sql we can perform both select and non select operations.

--by using native sql we can call stored precedure and functions.

NOTE: In Native SQL, results will be mapped with either pojo class or hibernate data types.

Inorder to work with with native sql, we will create SQLQuery object.

to create SQLQuery object we will go for createSQLQuery(-)method.

syntax:

public SQLQuery createSQLQuery(String sqlQuery)

SQLQuery is an interface, which extends from Query interface.

SQLQuery object means, it is an object of class which implements org.hibernate.SQLQuery interface (SQLQueryImpl)

SQLQueryImpl class implements SQLQuery.




*/






