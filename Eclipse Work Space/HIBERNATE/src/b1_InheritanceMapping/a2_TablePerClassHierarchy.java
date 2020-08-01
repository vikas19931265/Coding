/*

table per class hierarchy:
====================================

In this approach all the pojo classes which are participate in inheritance will use only one table. 

So In the above diagram 3 pojo classes uses only one table.(employee table)

To configure super class we will use <class> tag.

by using <subclass> tag we can configure child class in table per class hierarchay approach. it is child tag
of <class> tag

In table per class hierarchy we need to create a special column in the table. This special column is called 
discriminator column(EMP_TYPE).

By using this column we can differentiate the pojo classes data.

to configure discriminator column use
<discriminator> tag. it is child tag of <class> tag.

ex:
<h-m>
<class name="super class name">
<id name =-----/>
<discriminator column ="EMP_TYPE" type = "string">
</class>
</h-m>

NOTE: 

if we are not configuring "column" attribute of <discriminator> tag, by default hibernate uses discriminator
column name is "CLASS".

So defalt discriminator column name is CLASS.

To insert the data for descriminator column we will go for "discriminator-value" attribute of <subclass> or
 <class> tag.

EX:
<subclass name="RegularEmployee" discriminator-value="regular">

<subclass name="ContractEmployee" discriminator-value="contract">

NOTE: if we are not configuring discriminator-value attribute explicitly, HB insert POJO class name for 
discriminator column.

mapping file for table per class heirarchy approach.
--------------------------------------------------

<hibernate-mapping>
<class name="Employee" table="EMPLOYEE">
<id name="employeeId" column="EMP_ID" type="int">
<generator class="assigned" />
</id>
<discriminator column="EMP_TYPE" type="string" />
<property name="employeeName" column="EMP_NAME" />
<property name="location" column="LOCATION" />
<subclass name="RegularEmployee" discriminator-value="regular">
<property name="salary" column="SALARY" />
<property name="bonus" column="BONUS" />
</subclass>
<subclass name="ContractEmployee" discriminator-value="contract">
<property name="hourlyRate" column="HOUR_RATE" />
<property name="contractPeriod" column="CON_PERIOD" />
</subclass>
</class>
</hibernate-mapping> 



Disadvantage.
=====================

Subclass related column should be declared as nullable. it allows null value.
If we apply not-null is true for sub class related property, we cant insert the parent class object or other
class object.






*/