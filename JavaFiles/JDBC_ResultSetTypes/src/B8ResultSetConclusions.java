/*

Conclusions:
================
1.Updatable ResultSets allows the programmer to perform following operations on ResultSet.

select
insert
delete
update

2. Updatable ResultSets allows the programmer to perform insert, update and delete database
operations without using SQL Queries.

3.Very few drivers provide support for Updatable ResultSets.
Type-1 Driver provides support
Type-2 Driver provides support but we should not use * in SQL Query and we should use column
names.

4.ResultSet cannot be updatable if we are using joins and aggregate functions

5.It is not recommended to perform database updations by using updatable ResultSets, b'z most
of the drivers and most of the databases won't provide support for Updatable ResultSets.


*/