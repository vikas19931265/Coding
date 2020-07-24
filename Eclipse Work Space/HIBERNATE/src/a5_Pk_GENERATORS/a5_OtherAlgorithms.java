/*
hilo
======================


this generator works like the following.
-- for the first record, the id value will be inserted as 1.
-- for the second record, the id value will be inserted as 32768.
-- for the next record the id value generated 32768+the previous id value.
--this generator is data base independent.
--this algorithm generates the identity value of type long short or int.
--hibernate stores the count of the id values generated in a column of table. Hibenate by default 
creates a table with the name "hibernate_unique_key" and with the column name is next_hi

--if you want to modify the table and the column names we need to pass following 3 parameter values.
table, column names and max_lo
	
	formula for generate value
(max_lo value+1)*helper column value
			
<param name="table">HILO_USER</param>
<param name="column">HILO_COLUMN</param>
<param name="max_lo">99</param>

seqhilo
============

This algorithm is enhancement of hilo algorithm, which is internally uses given sequence name and 
parameter values to generate identity values of type short int long.

this algorithm does not reqired special table name form the programmer.
this algorithm works with only that underlying DB supports sequences.

following parameters are required.
sequence and max_lo

<param name="sequence">oracle_seq</param>
<param name="max_lo">10</param>
formula 
previous identiy value+(max_lo value+1)*sequence value	


foreign
=====================
this generator class is used only in one-to-one relationship in hibenate.
when two objects are having one to one relationship between them inorder to copy id of one object into
another object foreign generator is used. 

identity
==================
This algorithms work with only those DB s/w support identity columns.

This identity column in DB table must have Auto increment constraint.

This algorithm supports in DB2, MySQL, MS SQL Server, Sybase and HypersonicSQL.

This algorithm works with only short int and long data types.

Oracle doesnot supports identity columns, so Identity algorithm doest not support in Oracle DB.

This algorithm uses max value+1 formula to generate the identity value.

Native
====================
selects identity, sequence or hilo depending upon the capabilities of the underlying database.

In case of Oracle it uses sequence algorithm.(because it supports sequence)

In case of MySql it uses identity algorithm.(because it supports identity)

In case any DB s/w that does not support identity and sequence then this algoritm uses hilo algorithm.



*/