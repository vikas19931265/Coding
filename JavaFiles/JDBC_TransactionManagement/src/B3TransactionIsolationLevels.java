/*

1. TRANSACTION_READ_UNCOMMITTED:
======================================

It is the lowest level of isolation.

Before committing the transaction its intermediate results can be used by other transactions.

Internally it won't use any locks.

It does not prevent Dirty Read Problem, Non-Repeatable Read Problem and Phantom Read
Problem.

We can use this isolation level just to indicate database supports transactions.

This isolation level is not recommended to use.



2. TRANSACTION_READ_COMMITTED:
===========================================

This isolation level ensures that only committed data can be read by other transactions.
It prevents Dirty Read Problem. But there may be a chance of Non Repeatable Read Problem and
Phantom Read Problem.



3. TRANSACTION_REPEATABLE_READ:
============================================

This is the default value for most of the databases. Internally the result of SQL Query will be locked
for only one transaction. If we perform multiple read operations, then there is a guarantee that for
same result.

It prevents Dirty Read Problem and Non Repeatable Read Problems. But still there may be a
chance of Phantom Read Problem.

4. TRANSACTION_SERIALIZABLE:
===========================================

It is the highest level of isolation.

The total table will be locked for one transaction at a time.

It prevents Dirty Read, Non-Repeatable Read and Phantom Read Problems.

Not Recommended to use because it may creates performance problems as entire table will get locked.

Connection interface defines the following method to know isolation level.
                
            getTransactionIsolation()

Connection interface defines the following method to set our own isolation level.

           setTransactionIsolation(int level)

Eg:
        System.out.println(con.getTransactionIsolation());
        con.setTransactionIsolation(8);
        System.out.println(con.getTransactionIsolation());
Note:
=============

For Oracle database, the default isolation level is: 2(TRANSACTION_READ_COMMITED).

Oracle database provides support only for isolation levels 2 and 8.

For MySql database, the default isolation level is: 4(TRANSACTION_REPEATABLE_READ).

MySql database can provide support for all isolation levels (1, 2, 4 and 8).






*/