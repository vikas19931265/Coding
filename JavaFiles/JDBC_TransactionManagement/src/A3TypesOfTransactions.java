/*
Types of Transactions:
============================

There are two types of Transactions
1. Local Transactions
2. Global Transactions


1. Local Transactions:
==========================

All operations in a transaction are executed over same database.
Eg: Funds transfer from one account to another account where both accounts in the same bank.

2. Global Transactions:
==========================

All operations is a transaction are expected over different databases.

Eg: Funds Transfer from one account to another account and accounts are related to different
banks.

Note:
=======
JDBC can provide support only for local transactions.
If we want global transactions then we have to go for EJB or Spring framework.





*/