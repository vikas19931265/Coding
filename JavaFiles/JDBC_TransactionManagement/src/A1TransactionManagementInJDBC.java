/*
Transaction Management in JDBC
=====================================

-> Process of combining all related operations into a single unit and executing on the rule "either all
   or none", is called transaction management.

-> Hence transaction is a single unit of work and it will work on the rule "either all or none".

Case-1: Funds Transfer
==========================

1. debit funds from sender's account
2. credit funds into receiver's account

All operations should be performed as a single unit only. If debit from sender's account completed
and credit into receiver's account fails then there may be a chance of data inconsistency problems.

Case-2: Movie Ticket Reservation
==============================

1. Verify the status
2. Reserve the tickets
3. Payment
4. issue tickets.

All operations should be performed as a single unit only. If some operations success and some
operations fails then there may be data inconsistency problems.



*/