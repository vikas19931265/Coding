/*
Savepoint(Interface):
=======================================================

Savepoint is an interface present in java.sql package.Introduced in JDBC 3.0 Version.

Driver Software Vendor is responsible to provide implementation.

Savepoint concept is applicable only in Transactions.

Within a transaction if we want to rollback a particular group of operations based on some
condition then we should go for Savepoint.

We can set Savepoint by using setSavepoint() method of Connection interface.
Savepoint sp = con.setSavepoint();

To perform rollback operation for a particular group of operations wrt Savepoint, we can use
rollback() method as follows.
con.rollback(sp);

We can release or delete Savepoint by using release Savepoint() method of Connection interface.

con.releaseSavepoint(sp);

Case Study:
=======================

con.setAutoCommit(false);
Operation-1;
Operation-2;
Operation-3;
    Savepoint sp = con.setSavepoint();
Operation-4;
Operation-5;
if(balance<10000)
{
con.rollback(sp);
}
else
{
con.releaseSavepoint(sp);
operation-6;
con.commit();
At line-1 if balance <10000 then operations 4 and 5 will be Rollback, otherwise all operations will
be performed normally.


*/