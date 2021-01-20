package A1RowSetsBasics;

/*

Types of RowSets:
=====================================

There are two types of RowSets

1.Connected RowSets
2.Disconnected RowSets

Connected RowSets:
===========================

-> Connected RowSets are just like ResultSets.

-> To access RowSet data compulsary connection should be available to database.

We cannot serialize Connected RowSets

Eg: JdbcRowSet


Disconnected RowSets:
============================

-> Without having Connection to the database we can access RowSet data.
-> We can serialize Disconnected RowSets.

Eg:
===
CachedRowSet
WebRowSet
FilteredRowSet
JoinRowSet



*/