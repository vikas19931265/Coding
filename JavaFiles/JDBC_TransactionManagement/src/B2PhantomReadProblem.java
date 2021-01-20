/*

Phantom Read Problem:
================================

A phantom read occurs when one transaction reads all the rows that satisfy a where condition and
second transaction insert a new row that satisfy same where condition. If the first transaction
reads for the same condition in the result an additional row will come. This row is called phantom
row and this problem is called phantom read problem.

T1: select * from employees where esal >5000;
T2: insert into employees values(300,'ravi',8000,'hyd');
T1: select * from employees where esal >5000;

In the above code whenever transaction-1 performing read operation second time, a new row will
come in the result.

To overcome these problems we should go for Transaction isolation levels.
Connection interface defines the following 4 transaction isolation levels.

1. TRANSACTION_READ_UNCOMMITTED ➔ 1
2. TRANSACTION_READ_COMMITTED ➔ 2
3. TRANSACTION_REPEATABLE_READ ➔ 4
4. TRANSACTION_SERIALIZABLE ➔ 8



*/