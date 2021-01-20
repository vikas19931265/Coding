/*

Procedures
================================================================================

In our programming if any code repeatedly required, then we can define that code inside a
method and we can call that method multiple times based on our requirement.

Hence method is the best reusable component in our programming.

Similarly in the database programming, if any group of sql statements is repeatedly required then
we can define those sql statements in a single group and we can call that group repeatedly based
on our requirement.

This group of sql statements that perform a particular task is nothing but Stored Procedure.Hence
stored procedure is the best reusable component at database level.

Hence Stored Procedure is a group of sql statements that performs a particular task.

These procedures stored in database permanently for future purpose and hence the name stored
procedure.

Usually stored procedures are created by Database Admin (DBA).

Every database has its own language to create Stored Procedures.

Oracle has ➔ PL/SQL
MySQL has ➔ Stored Procedure Language
Microsoft SQL Server has ➔ Transact SQL(TSQL

Similar to methods stored procedure has its own parameters. Stored Procedure has 3 Types of
parameters.

1. IN parameters(to provide input values)
2. OUT parameters(to collect output values)
3. INOUT parameters(to provide input and to collect output)

Eg 1 :
========

Z:=X+Y;

X,Y are IN parameters and Z is OUT parameter


Eg 2:
========

X:=X+X;

X is INOUT parameter

Syntax for creating Stored Procedure (Oracle):
=================================================

 create or replace procedure procedure1(X IN number, Y IN number,Z OUT number) as
 BEGIN
     z:=x+y;
 END;
 /----------------> necessary for compilation.

Note:
===============

SQL and PL/SQL are not case-sensitive languages. We can use lower case and upper case also.
After writing Stored Procedure, we have to compile for this we required to use "/" (forward slash)
/ ➔ For compilation

while compiling if any errors occurs,then we can check these errors by using the following
command

SQL> show errors;

Once we created Stored Procedure and compiled successfully,we have to register OUT parameter
to hold result of stored procedure.

SQL> variable sum number; (declaring a variable)

        We can execute with execute command as follows

SQL> execute procedure1(10,20,:sum);
SQL> print sum;



Eg 2:
==========================

create or replace procedure procedure1(X IN number,Y OUT number) as

BEGIN
Y:= x*x;
END;
/

SQL> variable square number;
SQL> execute procedure1(10,:square);
SQL> print square;

SQUARE
----------
100
13

Eg3: 
================================

Procedure To Print Employee Salary Based On Given Employee Number.


create or replace procedure procedure2(eno1 IN number,esal1 OUT number) as
BEGIN
    select esal into esal1 from employees where eno=eno1;
END;
/

SQL>variable salary number;
SQL>execute procedure2(100,:salary);
SQL>print salary;


*/