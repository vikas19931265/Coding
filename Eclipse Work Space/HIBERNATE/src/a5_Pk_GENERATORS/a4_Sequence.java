package a5_Pk_GENERATORS;
/*
sequence
=====================

This algorithm generates the pk value of type long short or int.

This generator class is database dependent, it means we cant use this generator class for all the 
data bases.

This algorithm uses sequences created in DB softwares.

This Generator class supports for DB2, PostgreSQL, Oracle, SAP DB, McKoi dbs.

this algorithm doesn't works with mysql ,HSQL DBs. because mysql and HSQL DB S/W doesn't support sequence.

if we are not configuring user defined sequence in the mapping file hb uses
default sequence(hibernate_sequence) i.e 1.

<h-m>
<class ------->
<id name ------>
<generator class="sequence"/>
</id>
--
--
</class>
</h-m>

output:

In hibernate we can work with user defined sequence.


Steps to configure sequence
===================================


1.create sequence in DB by using following query.

CREATE SEQUENCE ABC_SEQ INCREMENT BY 10 START WITH 1000;

2.configure created sequence in the mapping file by using <param> tag. it is child tag of <generator> tag.
--
--
<generator class="sequence">
<param name="sequence">ABC_SEQ</param>
</generator>

NOTE:
To pass input value to any algorithm configured in HB mapping file use <param> tag.

output
------
no     name    email   mobile
---   -----    -----   ------
1000    --     ---     ---
1010    --     ---     ---
1020    --     ---     ---
1030    --     ---     ---



*/