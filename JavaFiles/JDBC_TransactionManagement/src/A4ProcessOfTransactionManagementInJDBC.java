/*

Process of Transaction Management in JDBC:
=============================================


1. Disable auto commit mode of JDBC
======================================

By default auto commit mode is enabled. i.e after executing every sql query, the changes will be
committed automatically in the database.
We can disable auto commit mode as follows
con.setAutoCommit(false);


2. If all operations completed then we can commit the transaction by using the following method.
===============================================================================================

con.commit();

3. If any sql query fails then we have to rollback operations which are already completed by using
===================================================================================================

rollback() method.
con.rollback();





*/