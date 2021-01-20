/*

CURSORS
================================================================================

The results of SQL Queries will be stored in special memory area inside database software. This
memory area is called Context Area.

To access Results of this context area,Some pointers are required and these pointers are nothing
but cursors.

Hence the main objective of cursor is to access results of SQL Queries.
There are 2 types of cursors

1. Implicit cursors
2. Explicit cursors

1. Implicit cursors:
============================

These cursors will be created automatically by database software to hold results whenever a
particular type of sql query got executed.

2. Explicit Cursors:
=============================


These cursors will be created explicitly by the developer to hold results of particular sql queries.

Eg 1:
============

    SYS_REFCURSOR can be used to access result of select query i.e to access ResultSet.

Eg 2: 
=============

    %ROWCOUNT is an implicit cursor provided by Oracle to represent the number of row
    effected because of insert,delete and update queries.

Eg 3:
============
%FOUND is an implicit cursor provided by Oracle to represent whether any rows effected or
not because of insert,delete and update operations(non-select query)


SYS_REFCURSOR VS OracleTypes.CURSOR:
======================================

To register SYS_REFCURSOR type OUT parameter JDBC does not contain any type.
To handle this situation, Oracle people provided OracleTypes.CURSOR where OracleTypes is
the class name and CURSOR is the variable.

OracleTypes is a java class present in oracle.jdbc package and it is available as the part of
ojdbc6.jar.

If OUT parameter is SYS_REFCURSOR type,then we can get ResultSet by using getObject() method.

But return type of getObject() method is Object and hence we should perform typecasting.

ResultSet rs = (ResultSet)cst.getObject(1);

*/