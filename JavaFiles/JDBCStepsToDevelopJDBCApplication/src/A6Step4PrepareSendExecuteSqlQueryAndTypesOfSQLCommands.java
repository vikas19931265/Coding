/*

Prepare Send And Execute Sql Query
=======================================

In this step on top of statement object we call the execute query method in order to execute
our sql query. Once the sql query is executed it hits the database and give us results.


SQL Commands
=================================


According to Database Specification, all SQL Commands are divided into following Types...

1. DDL(Data Definition Language Commands)  
   Eg: Create Table, Alter Table, Drop Table Etc

2. DML (Data Manipulation Language) Commands:
   Eg: Insert, Delete, Update

3. DQL (Data Query Language) Commands:
    Eg: Select

4. DCL (Data Control Language) Commands:
   Eg: Alter Password, Grant Access Etc..

5. Data Administration Commands
   Eg: Start Audit
   Stop Audit

6. Transaction Control Commands
   Commit, Rollback, Savepoint Etc
    

According to Java Developer Point of View, all SQL Operations are divided into 2 Types...

1. Select Operations (DQL)
2. Non-Select Operations (DML, DDL Etc)

*/