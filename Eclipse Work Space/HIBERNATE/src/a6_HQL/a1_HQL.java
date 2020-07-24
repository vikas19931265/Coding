/*
HQL
=========

In hibernate we can perform DB operations as single row or multiple rows.

So there are two type of DB operations.

1.Single row operations.
-----------------------
If we perform CURD operations on single row at a time, then we will call it as Single row operations.
Using save(), persist(), saveOrUpdate(), update(), delete(), load(--), get(--) ----- we can perform single row operations.

2.Bulk operations
-----------------
If we perform CURD operations on multiple rows at a time, then we will call it as Bulk operations.

Using HQL, NativeSQL, Criteria API we can perform bulk operations.


HQL(Hiberante query language)
============================================

-- HQL is an Object oriented form of SQL.

--HQL queries are DB independent queries, so these queries based logic is DB independent logic.

--HQL queries will be written based on POJO class name and member variables. i.e we replaced the column names with 
member variable and table name with pojo class name.

--HQL queries are object level queries, so they return hibarnate pojo class object as result. i.e list of objects.

--HQL queries and keywords are verymuch similar to SQL queries.

--HB s/w converts the HQL queries into SQL queries and sends that queries to DB s/w for execution.

--HQL queries supports operators, expression, conditions, joins, sub queries, aggregate functions etc.

--we can use the HQL queries for both select and non select(update and delete) operations.

--hql queries are not case sensitive, but pojo class name and pojo class member variables used in hql are case sensitive.

ex: select st.sno, st.semail from Student as st

select, from, as are not casesensitive
but Student, sno, semail are case sensitive.

--when we select the specific columns or when we are writing the conditions in hql using alias name is mandatory
which is optional in sql.

ex: select st.sno, st.semail from Student as st where st.sno=10

--hql queries allows to work with positional parameters(?) and named parameters(:no).

--By using hql we can perform only DML operations. we can't perform DDL operations, that means we can insert, update, 
delete and select the data only. We can't create, alter and drop the tables.



*/