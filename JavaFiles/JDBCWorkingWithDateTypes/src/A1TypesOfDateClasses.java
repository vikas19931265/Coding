/*

Handling Date Values For Database Operations
==============================================

Sometimes as the part of programming requirement,we have to insert and retrieve Date like
DOB,DOJ,DOM,DOP...wrt database.

It is not recommended to maintain date values in the form of String,b'z comparisons will become
difficult.

In Java we have two Date classes

1. java.util.Date
2. java.sql.Date

java.sql.Date is the child class of java.util.Date.

java.sql.Date is specially designed class for handling Date values wrt database.

Other than database operations,if we want to represent Date in our java program then we should
go for java.util.Date.

java.util.Date can represent both Date and Time where as java.sql.Date represents only Date but
not time.


*/