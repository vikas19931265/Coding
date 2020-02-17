/*

1. Dirty Read Problem:
===========================

Also known as uncommitted dependency problem.
===================================================

Before committing the transaction, if its intermediate results used by any other transaction then
there may be a chance of Data inconsistency problems. This is called Dirty Read Problem.

durga:50000

T1: update accounts set balance=balance+50000 where name='durga'
T2: select balance from accounts where name='durga'
T1: con.rollback();


At the end, T1 point of view, durga has 50000 balance and T2 point of view durga has 1Lakh. There
may be a chance of data inconsistency problem. This is called Dirty Read Problem.





*/