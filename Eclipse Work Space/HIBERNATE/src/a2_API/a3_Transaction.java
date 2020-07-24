/*

Transaction
===========================

It is an interface defined in org.hibernate package.

A Trasaction represents a unit of work with the database.

By using session object will get the Trasaction object.

While working with non select operations(insert, update, delete) creating transaction object is mandatory.
but while working with select operations creating transaction object is optional.

NOTE:

In hibernate default autocommit mode is false. so explicitly we have to call tx.commit() method to store the
data into table permanently.

Using following method we will get the trasaction object.

Trasaction tx= session.beginTrasaction();

*/

