/*

SQL Injection Attack
================================

In the case of Simple Statement every time the query will send to the database with user provided
input values.

Every time the query will be compiled and executed. Some times end user may provide special
characters as the part user input,which may change behavior of sql query.This is nothing but SQL
Injection Attack,which causes security problems.

But in the case of PreparedStatement query will be compiled at the beginning only without
considering end user's input. User provided data will be considered at the time of execution only.
Hence as the part of user input,if he provides any special characters as the part of input,query
behaviour wont be changed. Hence there is no chance of SQL Injection Attack in
PreparedStatement.

Eg: select count(*) from users where uname='"+uname+"' and upwd='"+upwd+"'"

If the end user provides username as durga and pwd as java then the query will become
select count(*) from users where uname='durga' and upwd='java'

The query is meaningful and it is validating both username and pwd.

If the end user provides username as durga'-- and pwd as anushka then the query will become

select count(*) from users where uname='durga'--' and upwd='anushka' which is equivalent to saying
    
            select count(*) from users where uname='durga';  as rest of statement is treated as the comment.

It is not meaningful query because it is validating only username but not pwd. i.e with end user's
provided input the query behavior is changing,which is nothing but sql injection attack.

Note:
-- Single Line SQL Comment
/*
Multi Line SQL
Comment

Eg 2:
==========

select * from users where uid=enduserprovidedinput
select * from users where uid=101;

returns record information where uid=101
select * from users where uid=101 OR 1=1; // here uid =101 or 1=1 condition is satisfied hence will get access.

1=1 is always true and hence it returns complete table information like username, pwd, uid etc.
which may create security problems.




*/