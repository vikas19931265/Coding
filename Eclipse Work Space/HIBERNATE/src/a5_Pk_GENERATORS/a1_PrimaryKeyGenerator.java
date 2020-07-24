package a5_Pk_GENERATORS;
/*

Primary key generator
===========================

HB gives inbuilt support to generate the primary key value in the table.

While inserting new record/row in the table the primary key column must be populated with a unique value.

By using <generator> tag we will configure pk generator algorithm.

<generator> tag is child tag for <id> tag.

Hibernate gives lot of predefined algorithms.
 
HB provided different pk generator classes, all these classes are implemented
org.hibernate.id.IdentifierGenerator interface.

NOTE:
===============
If we want to write user defined algorithm or generator class, that class should implements 
org.hibernate.id.IdentifierGenerator interface.

<generator> tag has only one sub element i.e <param>

ex:
<h-m>
<class name = "Student" table = "TB_STUDENT">
<id name = "sno" column="NO">
<generator class="assigned"/>
</id>
--
--
</class>
</h-m>

All Pk generator classes having  short names to utilize. So we can configure the algorithm by using either
 short name or fully qualified class name.

<generator class = "assigned"/>
or
<generator class = "org.hibernate.id.Assigned"/>

algorithm short name and class name.
==============================================

assigned - org.hibernate.id.Assigned

increment - org.hibernate.id.IncrementGenerator

sequence - org.hibernate.id.SequenceGenerator

hilo - org.hibernate.id.TableHiLoGenerator

seqhilo - org.hibernate.id.SequenceHiLoGenerator

identity - org.hibernate.id.IdentityGenerator

guid - org.hibernate.id.GUIDGenerator

select - org.hibernate.id.SelectGenerator

NOTE:
==============

Consider the following two rules while choosing an algorithm.

1.Make sure that configured algorithm compatible with property data type or not.

2.Make sure that configured algorithm supports underlying database or not.





*/