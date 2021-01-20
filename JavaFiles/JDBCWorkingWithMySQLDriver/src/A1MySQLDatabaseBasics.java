/*

MySQL Database
================================================================================

Current Version :5.7.14
Vendor: Sun Microsystems/Oracle Corporation
Open Source And Freeware
Default Port: 3306
Default User: root

Note:
==========
In MySql, everything we have to work with our own Databases, which are also known as Logical
Databases.

The Default Databases are:
=============================

information_schema
mysql
test

Here only one Physical Database but 4 Logical Databases are available.

Commonly used Commands:

1. To know available Databases
        mysql> show databases;

2. To Create our own Logical Database
    mysql> create database durgadb;

3. To Drop our own Database
    mysql> drop database durgadb;

4. To use a particular Logical Database
    mysql> use durgadb;
OR
    mysql> connect durgadb;

5. To Create a Table:
    create table employees(eno int(5) primary key,ename varchar(20),esal double(10,2),eaddr
    varchar(20));

6. To Insert Data
    insert into employees values(100,'durga',1000,'Hyd');
    Instead of Single Quotes, we can use Double Quotes also.

JDBC Information:
=======================

In general, we can use Type-4 Driver to communicates with MySQL Database which is provided by
MySQL Vendor, and its Name is connector/J

Jar File:
=======================

Driver Software is available in the following Jar File.
    mysql-connector-java-5.1.41-bin.jar
We have to download separately from MySql Web Site.

jdbc url: 
=================

jdbc:mysql://localhost:3306/durgadb
or jdbc:mysql:///durgadb

If MySQL is available in Local System then we can specify JDBC URL as above.

Driver Class Name: com.mysql.jdbc.Driver
User Name: root
pwd: root
We required to Set Class Path of MySql Driver Jar File
Variable Name: CLASSPATH
Variable Value: D:\mysql-connector-java-bin.jar;.;


*/